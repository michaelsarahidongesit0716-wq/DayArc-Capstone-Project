import { useEffect, useState } from "react";
import { useTasks } from "../context/taskcontext";
import { formatMinutes } from "../utils/datehelpers";

export default function TaskCard({ task, onEdit }) {
    const { toggleComplete, deleteTask, startTimer, stopTimer } = useTasks();
    // "liveSeconds" lets the on-screen timer tick up every second while
    // running, without writing to Firestore on every tick (we only write
    // once, when the timer is stopped — see TaskContext.stopTimer).
    const [liveSeconds, setLiveSeconds] = useState(task.timeSpentSeconds || 0);

    useEffect(() => {
        if (!task.timerStartedAt) {
            setLiveSeconds(task.timeSpentSeconds || 0);
            return;
        }
        const interval = setInterval(() => {
            const runningFor = Math.round((Date.now() - task.timerStartedAt) / 1000);
            setLiveSeconds((task.timeSpentSeconds || 0) + runningFor);
        }, 1000);
        return () => clearInterval(interval);
    }, [task.timerStartedAt, task.timeSpentSeconds]);

    const isRunning = Boolean(task.timerStartedAt);

    return (
        <div className={`task-card ${task.completed ? "task-card--done" : ""}`}>
            <label className="task-check">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task)}
                />
                <span />
            </label>

            <div className="task-body">
                <p className="task-title">{task.title}</p>
                <div className="task-meta">
                    {task.time && <span>⏰ {task.time}</span>}
                    <span>⏱ {formatMinutes(liveSeconds)}</span>
                </div>
            </div>

            <div className="task-actions">
                <button
                    className="btn btn-icon"
                    title={isRunning ? "Pause timer" : "Start timer"}
                    onClick={() => (isRunning ? stopTimer(task) : startTimer(task))}
                >
                    {isRunning ? "⏸" : "▶"}
                </button>
                <button className="btn btn-icon" title="Edit" onClick={() => onEdit(task)}>
                    ✏️
                </button>
                <button
                    className="btn btn-icon"
                    title="Delete"
                    onClick={() => deleteTask(task.id)}
                >
                    🗑
                </button>
            </div>
        </div>
    );
}