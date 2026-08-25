import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import TaskCard from "../components/taskcard";
import TaskForm from "../components/taskform";
import MatrixBoard from "../components/matrixboard";
import ProgressRing from "../components/progressring";
import MotivationalPopup from "../components/motivationalpopup";
import EmptyState from "../components/emptystate";
import { useAuth } from "../context/authcontext";
import { useTasks } from "../context/taskcontext";
import { useMotivation } from "../hooks/usemotivation";
import { todayISO } from "../utils/datehelpers";
import { gradeFor } from "../utils/grading";

export default function Dashboard() {
    const { profile } = useAuth();
    const { tasks, addTask } = useTasks();
    const { message, dismiss } = useMotivation();
    const [view, setView] = useState("list"); // "list" | "matrix"
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [notifPermission, setNotifPermission] = useState(
        typeof Notification !== "undefined" ? Notification.permission : "denied"
    );

    const prepTime = profile?.prepTime || "06:00";
    const startTime = profile?.startTime || "07:00";

    const todayTasks = useMemo(
        () => tasks.filter((t) => t.date === todayISO()),
        [tasks]
    );
    const grade = gradeFor(todayTasks);

    useEffect(() => {
        const firedThisMinute = new Set();
        const interval = setInterval(() => {
            const now = new Date();
            const hhmm = now.toTimeString().slice(0, 5);

            todayTasks.forEach((task) => {
                if (task.time === hhmm && !firedThisMinute.has(task.id)) {
                    firedThisMinute.add(task.id);
                    notify(`Time for: ${task.title}`);
                }
            });

            if (hhmm === prepTime && !firedThisMinute.has("prep")) {
                firedThisMinute.add("prep");
                notify("Good morning! Take a minute to plan today's schedule.");
            }
            if (hhmm === startTime && !firedThisMinute.has("start")) {
                firedThisMinute.add("start");
                notify("Time to start your first task of the day!");
            }
        }, 30 * 1000);

        return () => clearInterval(interval);
    }, [todayTasks, prepTime, startTime]);

    function notify(text) {
        if (notifPermission === "granted") {
            new Notification(text);
        }
        const voiceEnabled = profile?.voiceEnabled !== false;
        if (voiceEnabled && typeof window !== "undefined" && "speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        }
    }

    async function requestNotifications() {
        const result = await Notification.requestPermission();
        setNotifPermission(result);
    }

    function openEdit(task) {
        setEditingTask(task);
        setShowForm(true);
    }

    function closeForm() {
        setShowForm(false);
        setEditingTask(null);
    }

    return (
        <>
            <Navbar />
            <main className="page">
                <section className="dashboard-header">
                    <div>
                        <p className="greeting">HELLO, {profile?.name || "Friend"}</p>
                        <h1>Today</h1>
                        <p className="page-subtitle">
                            {new Date().toLocaleDateString(undefined, {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <ProgressRing percent={grade.percent} label={`Grade: ${grade.letter}`} />
                </section>

                {notifPermission !== "granted" && (
                    <div className="banner">
                        <span>Turn on notifications to get alarms for every scheduled task.</span>
                        <button className="btn btn-ghost" onClick={requestNotifications}>
                            Enable notifications
                        </button>
                    </div>
                )}

                <section className="settings-toggle-row">
                    <Link to="/settings" className="btn btn-ghost">
                        ⚙️ Settings
                    </Link>
                </section>

                <section className="toolbar">
                    <div className="view-toggle">
                        <button
                            className={view === "list" ? "active" : ""}
                            onClick={() => setView("list")}
                        >
                            List
                        </button>
                        <button
                            className={view === "matrix" ? "active" : ""}
                            onClick={() => setView("matrix")}
                        >
                            Urgent-Important Matrix
                        </button>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setEditingTask(null);
                            setShowForm(true);
                        }}
                    >
                        + Add task
                    </button>
                </section>

                {view === "list" ? (
                    <section className="task-list">
                        {todayTasks.length === 0 && (
                            <EmptyState ageGroup={profile?.ageGroup} />
                        )}
                        {todayTasks.map((task) => (
                            <TaskCard key={task.id} task={task} onEdit={openEdit} />
                        ))}
                    </section>
                ) : (
                    <MatrixBoard tasks={todayTasks} onEdit={openEdit} />
                )}

                {showForm && (
                    <div className="modal-backdrop" onClick={closeForm}>
                        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                            <TaskForm editingTask={editingTask} onDone={closeForm} />
                        </div>
                    </div>
                )}
            </main>

            <MotivationalPopup message={message} onDismiss={dismiss} />
        </>
    );
}