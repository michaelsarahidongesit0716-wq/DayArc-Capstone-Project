import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import Navbar from "../components/navbar";
import { db } from "../firebase";
import { useAuth } from "../context/authcontext";
import { todayISO } from "../utils/datehelpers";

export default function Reflection() {
    const { user } = useAuth();
    const [entries, setEntries] = useState([]);
    const [text, setText] = useState("");
    const [type, setType] = useState("daily");

    useEffect(() => {
        if (!user) return;
        const q = query(
            collection(db, "reflections"),
            where("ownerId", "==", user.uid),
            orderBy("createdAt", "desc")
        );
        const unsubscribe = onSnapshot(q, (snap) =>
            setEntries(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        );
        return unsubscribe;
    }, [user]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        await addDoc(collection(db, "reflections"), {
            ownerId: user.uid,
            type,
            text,
            date: todayISO(),
            createdAt: Date.now(),
        });
        setText("");
    }

    return (
        <>
            <Navbar />
            <main className="page">
                <h1>Reflections</h1>
                <p className="page-subtitle">
                    Write a quick daily or weekly reflection on how things went.
                </p>

                <form className="reflection-form" onSubmit={handleSubmit}>
                    <div className="reflection-type-toggle">
                        <button
                            type="button"
                            className={type === "daily" ? "active" : ""}
                            onClick={() => setType("daily")}
                        >
                            Daily
                        </button>
                        <button
                            type="button"
                            className={type === "weekly" ? "active" : ""}
                            onClick={() => setType("weekly")}
                        >
                            Weekly
                        </button>
                    </div>
                    <textarea
                        rows={4}
                        placeholder="What went well today? What would you do differently?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn btn-primary">Save reflection</button>
                </form>

                <section className="reflection-list">
                    {entries.map((entry) => (
                        <article key={entry.id} className="reflection-entry">
                            <header>
                                <span className={`tag tag--${entry.type}`}>{entry.type}</span>
                                <time>{entry.date}</time>
                            </header>
                            <p>{entry.text}</p>
                        </article>
                    ))}
                    {entries.length === 0 && (
                        <p className="empty-state">No reflections yet — write your first one above.</p>
                    )}
                </section>
            </main>
        </>
    );
}