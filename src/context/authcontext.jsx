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

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                try {
                    const snap = await getDoc(doc(db, "users", firebaseUser.uid));
                    setProfile(snap.exists() ? snap.data() : null);
                } catch (err) {

                    console.error("Failed to load user profile from Firestore:", err);
                    setProfile(null);
                }
            } else {
                setProfile(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    function withTimeout(promise, message) {
        return Promise.race([
            promise,
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error(message)), 15000)
            ),
        ]);
    }

    async function register({ name, email, password, ageGroup }) {
        const cred = await withTimeout(
            createUserWithEmailAndPassword(auth, email, password),
            "Account creation timed out. Check your internet connection."
        );
        await updateProfile(cred.user, { displayName: name });

        const profileData = {
            name,
            email,
            ageGroup,

            prepTime: "00:00 ",
            startTime: "00:00 ",
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

    async function updateSettings(changes) {
        await setDoc(doc(db, "users", user.uid), changes, { merge: true });
        setProfile((prev) => ({ ...prev, ...changes }));
    }

    const value = { user, profile, loading, register, login, logout, updateSettings };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}