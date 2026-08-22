import { useMemo } from "react";

// A few different lines per audience so it doesn't feel robotic on repeat
// visits — one is picked at random each time the empty state renders.
// Kept short and warm rather than a flat instruction.
const MESSAGES = {
    teen: [
        { sticker: "🔥", text: "Blank page, big energy. Add your first task and start a streak!" },
        { sticker: "🎧", text: "Your day's a clean slate. What's first on the list?" },
        { sticker: "🚀", text: "Nothing here yet — that just means anything's possible today." },
    ],
    adult: [
        { sticker: "☕", text: "A quiet start. Add your first task and get the day moving." },
        { sticker: "🗒️", text: "Your schedule's wide open — block out what matters most first." },
        { sticker: "🌱", text: "Every productive day starts with one task. Add yours." },
    ],
};

export default function EmptyState({ ageGroup = "adult" }) {
    const pool = MESSAGES[ageGroup] || MESSAGES.adult;
    // useMemo keeps the same random message for the life of this mount,
    // instead of re-rolling on every re-render.
    const pick = useMemo(() => pool[Math.floor(Math.random() * pool.length)], [pool]);

    return (
        <div className="empty-state-card">
            <span className="empty-state-sticker" aria-hidden="true">{pick.sticker}</span>
            <p>{pick.text}</p>
        </div>
    );
}