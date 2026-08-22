// import { useEffect, useState } from "react";

// const MESSAGES = [
//     "You're doing better than you think. Keep going!",
//     "One task at a time — that's all it takes.",
//     "Progress, not perfection. You've got this.",
//     "Future you is going to thank you for this.",
//     "Small steps today, big wins this week.",
//     "Take a breath, then check off the next one.",
// ];

// // Every INTERVAL_MS, pick a random message and show it. The MotivationalPopup
// // component reads this hook's state and renders/dismisses accordingly.
// const INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

// export function useMotivation() {
//     const [message, setMessage] = useState(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const random = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
//             setMessage(random);
//         }, INTERVAL_MS);
//         return () => clearInterval(interval);
//     }, []);

//     function dismiss() {
//         setMessage(null);
//     }

//     return { message, dismiss };
// }





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
];

// Every INTERVAL_MS, pick a random message and show it. The MotivationalPopup
// component reads this hook's state and renders/dismisses accordingly.
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