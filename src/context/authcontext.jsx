import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

// React Context lets any component in the tree read "who is logged in"
// without us having to pass that data down through every single component.
const AuthContext = createContext(null);

// Custom hook so other files just write: const { user, profile } = useAuth();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // the Firebase Auth user object
    const [profile, setProfile] = useState(null); // our extra data: name, ageGroup
    const [loading, setLoading] = useState(true);

    // onAuthStateChanged fires automatically whenever someone logs in, logs
    // out, or when the page refreshes and Firebase restores the session.
    // This is the mechanism that keeps unauthorized users OUT: every page
    // in the app checks this state before showing protected content.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                try {
                    // Pull the matching profile document (name, ageGroup) from Firestore.
                    const snap = await getDoc(doc(db, "users", firebaseUser.uid));
                    setProfile(snap.exists() ? snap.data() : null);
                } catch (err) {
                    // If Firestore can't be reached (offline, blocked request, wrong
                    // project config, etc.), log the real reason and fall back to no
                    // profile rather than leaving the app stuck on a loading screen
                    // forever. The Dashboard already handles profile being null.
                    console.error("Failed to load user profile from Firestore:", err);
                    setProfile(null);
                }
            } else {
                setProfile(null);
            }
            setLoading(false);
        });
        return unsubscribe; // cleanup when the app unmounts
    }, []);

    // Wraps any Firebase call with a timeout. Firestore writes/reads don't
    // always reject quickly when the database is unreachable (e.g. missing
    // database, blocked network) — they can hang indefinitely waiting to
    // retry. This guarantees the user sees a real error within 15 seconds
    // instead of a spinner that never resolves.
    function withTimeout(promise, message) {
        return Promise.race([
            promise,
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error(message)), 15000)
            ),
        ]);
    }

    // Creates a brand-new account. ageGroup is one of: teen | adult.
    async function register({ name, email, password, ageGroup }) {
        const cred = await withTimeout(
            createUserWithEmailAndPassword(auth, email, password),
            "Account creation timed out. Check your internet connection."     //and Firebase setup//
        );
        // Store the display name on the Firebase Auth account itself.
        await updateProfile(cred.user, { displayName: name });
        // Store the extra profile fields (ageGroup) in Firestore, keyed by uid.
        // Firestore security rules (see firestore.rules) make sure only THIS
        // user can ever read or write this document — that's the "no
        // unauthorized access" requirement.
        const profileData = {
            name,
            email,
            ageGroup,
            // Defaults — the user can change these later from the Dashboard's
            // reminder settings panel. Nothing is hardcoded into the app logic.
            prepTime: "06:00",
            startTime: "07:00",
            createdAt: serverTimestamp(),
        };
        await withTimeout(
            setDoc(doc(db, "users", cred.user.uid), profileData),
            "Saving your profile timed out. Your Firestore database may not be set up yet — see the README."
        );
        setProfile(profileData);
        return cred.user;
    }

    function login({ email, password }) {
        return withTimeout(
            signInWithEmailAndPassword(auth, email, password),
            "Login timed out. Check your internet connection and Firebase setup."
        );
    }

    function logout() {
        return signOut(auth);
    }

    // Lets the signed-in user change their reminder times (or anything else
    // in their profile) after registration — e.g. "prepTime" and "startTime"
    // on the Dashboard settings panel.
    async function updateSettings(changes) {
        await setDoc(doc(db, "users", user.uid), changes, { merge: true });
        setProfile((prev) => ({ ...prev, ...changes }));
    }

    const value = { user, profile, loading, register, login, logout, updateSettings };

    // Every screen in the app is wrapped in this provider (see App.jsx),
    // so any component can call useAuth() to read this value.
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}