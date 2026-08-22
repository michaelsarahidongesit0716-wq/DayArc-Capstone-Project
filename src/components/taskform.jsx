import { useState } from "react";
import { useTasks } from "../context/taskcontext";
import { todayISO } from "../utils/datehelpers";

const QUADRANTS = [
    { value: "urgent-important", label: "Urgent & Important" },
    { value: "urgent-not", label: "Urgent, Not Important" },
    { value: "not-urgent-important", label: "Important, Not Urgent" },
    { value: "not-not", label: "Not Urgent, Not Important" },
];

// One form handles BOTH creating a new task and editing an existing one.
// If "editingTask" is passed in, the fields are pre-filled and saving
// calls updateTask instead of addTask.
export default function TaskForm({ editingTask, onDone }) {
    const { addTask, updateTask } = useTasks();
    const [title, setTitle] = useState(editingTask?.title || "");
    const [time, setTime] = useState(editingTask?.time || "");
    const [quadrant, setQuadrant] = useState(
        editingTask?.quadrant || "urgent-important"
    );

    async function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;

        if (editingTask) {
            await updateTask(editingTask.id, { title, time, quadrant });
        } else {
            await addTask({ title, time, quadrant, date: todayISO() });
        }
        onDone();
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                autoFocus
                placeholder="What do you need to do?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <select value={quadrant} onChange={(e) => setQuadrant(e.target.value)}>
                {QUADRANTS.map((q) => (
                    <option key={q.value} value={q.value}>
                        {q.label}
                    </option>
                ))}
            </select>
            <div className="task-form-actions">
                <button type="submit" className="btn btn-primary">
                    {editingTask ? "Save changes" : "Add task"}
                </button>
                <button type="button" className="btn btn-ghost" onClick={onDone}>
                    Cancel
                </button>
            </div>
        </form>
    );
}