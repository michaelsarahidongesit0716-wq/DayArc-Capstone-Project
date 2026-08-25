import { useMemo } from "react";

const MESSAGES = {
    teen: [
        { sticker: "🔥", text: "Nothing here yet — that just means anything's possible today." },
        { sticker: "🎧", text: "Your day's a clean slate. What's first on the list?" },
        { sticker: "🚀", text: "Blank page, big energy. Add your first task and start a streak!" },
        { sticker: "🌟", text: "Stay focused. Keep moving." },
        { sticker: "🌞", text: "Plan it. Do it. Achieve it." },
    ],
    adult: [
        { sticker: "☕", text: "A quiet start. Add your first task and get the day moving." },
        { sticker: "📝", text: "Your schedule's wide open — block out what matters most first." },
        { sticker: "🌱", text: "Every productive day starts with one task. Add yours." },
        { sticker: "✅", text: "Organize your day, own your time." },
        { sticker: "😊", text: "Small steps, big results.", },
    ],
};

export default function EmptyState({ ageGroup = "adult" }) {
    const pool = MESSAGES[ageGroup] || MESSAGES.adult;
    const pick = useMemo(() => pool[Math.floor(Math.random() * pool.length)], [pool]);

    return (
        <div className="empty-state-card">
            <span className="empty-state-sticker" aria-hidden="true">{pick.sticker}</span>
            <p>{pick.text}</p>
        </div>
    );
}