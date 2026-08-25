import { useEffect, useState } from "react";

const MESSAGES = [
    "You're doing better than you think. Keep going!",
    "One task at a time — that's all it takes.",
    "Progress, not perfection. You've got this.",
    "Future you is going to thank you for this.",
    "Small steps today, big wins this week.",
    "Take a breath, then check off the next one.",
    "Remember, every small action counts toward your goals.",
    "Consistency is key. Keep showing up for yourself.",
    "Celebrate your progress, no matter how small.",
    "You are capable of more than you realize.",
    "Your effort today is building the foundation for tomorrow's success.",
    "Make every moment count.",
    "Small steps, big results.",
    "Your time, your progress.",
    "Stay focused.Keep moving.",
    "Turn plans into progress.",
    "Progress starts with a plan.",
    "Organize your day, own your time.",
    "A planned day is a productive day.",
    "Focus on what matters.",
    "Start where you are.Keep going.",
    "Today is another chance to grow.",
    "Every completed task is a step forward.",
    "Don’t just spend time—use it well.",
    "Your goals deserve your attention.",
    "Stay consistent, stay productive.",
    "Prioritize.Focus.Accomplish.",
    "Make today meaningful.",
    "Plan it.Do it.Achieve it.",
    "Make every moment count.",
    "Turn plans into progress.",
    "One task at a time.",
    "Organize your day, own your time.",
];

const INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export function useMotivation() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            setMessage(random);
        }, INTERVAL_MS);
        return () => clearInterval(interval);
    }, []);

    function dismiss() {
        setMessage(null);
    }

    return { message, dismiss };
}