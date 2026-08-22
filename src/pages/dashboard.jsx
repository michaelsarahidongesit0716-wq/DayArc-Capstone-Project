// import { useEffect, useMemo, useState } from "react";
// import Navbar from "../components/navbar";
// import TaskCard from "../components/taskcard";
// import TaskForm from "../components/taskform";
// import MatrixBoard from "../components/matrixboard";
// import ProgressRing from "../components/progressring";
// import MotivationalPopup from "../components/motivationalpopup";
// import { useTasks } from "../context/taskcontext";
// import { useMotivation } from "../hooks/usemotivation";
// import { todayISO } from "../utils/datehelpers";
// import { gradeFor } from "../utils/grading";

// export default function Dashboard() {
//     const { tasks, addTask } = useTasks();
//     const { message, dismiss } = useMotivation();
//     const [view, setView] = useState("list"); // "list" | "matrix"
//     const [showForm, setShowForm] = useState(false);
//     const [editingTask, setEditingTask] = useState(null);
//     const [notifPermission, setNotifPermission] = useState(
//         typeof Notification !== "undefined" ? Notification.permission : "denied"
//     );

//     const todayTasks = useMemo(
//         () => tasks.filter((t) => t.date === todayISO()),
//         [tasks]
//     );
//     const grade = gradeFor(todayTasks);

//     // --- Alarms for every scheduled activity ---------------------------------
//     // Every 30 seconds we check: is there a task whose "time" field matches
//     // the current HH:MM and hasn't fired yet? If so, fire a browser
//     // notification. This is the simplest reliable way to do in-app alarms
//     // without a backend scheduler — the tab needs to be open for it to work,
//     // which is normal for browser-based reminder apps.
//     useEffect(() => {
//         const firedThisMinute = new Set();
//         const interval = setInterval(() => {
//             const now = new Date();
//             const hhmm = now.toTimeString().slice(0, 5);

//             todayTasks.forEach((task) => {
//                 if (task.time === hhmm && !firedThisMinute.has(task.id)) {
//                     firedThisMinute.add(task.id);
//                     notify(`⏰ Time for: ${task.title}`);
//                 }
//             });

//             // The two fixed daily reminders from the project brief.
//             if (hhmm === "06:00" && !firedThisMinute.has("prep")) {
//                 firedThisMinute.add("prep");
//                 notify("🌅 Good morning! Take a minute to plan today's schedule.");
//             }
//             if (hhmm === "07:00" && !firedThisMinute.has("start")) {
//                 firedThisMinute.add("start");
//                 notify("🚀 Time to start your first task of the day!");
//             }
//         }, 30 * 1000);

//         return () => clearInterval(interval);
//     }, [todayTasks]);

//     function notify(text) {
//         if (notifPermission === "granted") {
//             new Notification(text);
//         }
//     }

//     async function requestNotifications() {
//         const result = await Notification.requestPermission();
//         setNotifPermission(result);
//     }

//     function openEdit(task) {
//         setEditingTask(task);
//         setShowForm(true);
//     }

//     function closeForm() {
//         setShowForm(false);
//         setEditingTask(null);
//     }

//     return (
//         <>
//             <Navbar />
//             <main className="page">
//                 <section className="dashboard-header">
//                     <div>
//                         <h1>Today</h1>
//                         <p className="page-subtitle">
//                             {new Date().toLocaleDateString(undefined, {
//                                 weekday: "long",
//                                 month: "long",
//                                 day: "numeric",
//                             })}
//                         </p>
//                     </div>
//                     <ProgressRing percent={grade.percent} label={`Grade: ${grade.letter}`} />
//                 </section>

//                 {notifPermission !== "granted" && (
//                     <div className="banner">
//                         <span>Turn on notifications to get alarms for every scheduled task.</span>
//                         <button className="btn btn-ghost" onClick={requestNotifications}>
//                             Enable notifications
//                         </button>
//                     </div>
//                 )}

//                 <section className="toolbar">
//                     <div className="view-toggle">
//                         <button
//                             className={view === "list" ? "active" : ""}
//                             onClick={() => setView("list")}
//                         >
//                             List
//                         </button>
//                         <button
//                             className={view === "matrix" ? "active" : ""}
//                             onClick={() => setView("matrix")}
//                         >
//                             Urgent-Important Matrix
//                         </button>
//                     </div>
//                     <button
//                         className="btn btn-primary"
//                         onClick={() => {
//                             setEditingTask(null);
//                             setShowForm(true);
//                         }}
//                     >
//                         + Add task
//                     </button>
//                 </section>

//                 {view === "list" ? (
//                     <section className="task-list">
//                         {todayTasks.length === 0 && (
//                             <p className="empty-state">
//                                 Nothing scheduled yet — add your first task for today.
//                             </p>
//                         )}
//                         {todayTasks.map((task) => (
//                             <TaskCard key={task.id} task={task} onEdit={openEdit} />
//                         ))}
//                     </section>
//                 ) : (
//                     <MatrixBoard tasks={todayTasks} onEdit={openEdit} />
//                 )}

//                 {showForm && (
//                     <div className="modal-backdrop" onClick={closeForm}>
//                         <div className="modal-card" onClick={(e) => e.stopPropagation()}>
//                             <TaskForm editingTask={editingTask} onDone={closeForm} />
//                         </div>
//                     </div>
//                 )}
//             </main>

//             <MotivationalPopup message={message} onDismiss={dismiss} />
//         </>
//     );
// }





// import { useEffect, useMemo, useState } from "react";
// import Navbar from "../components/navbar";
// import TaskCard from "../components/taskcard";
// import TaskForm from "../components/taskform";
// import MatrixBoard from "../components/matrixboard";
// import ProgressRing from "../components/progressring";
// import MotivationalPopup from "../components/motivationalpopup";
// import { useAuth } from "../context/authcontext";
// import { useTasks } from "../context/taskcontext";
// import { useMotivation } from "../hooks/usemotivation";
// import { todayISO } from "../utils/datehelpers";
// import { gradeFor } from "../utils/grading";

// export default function Dashboard() {
//     const { profile, updateSettings } = useAuth();
//     const { tasks, addTask } = useTasks();
//     const { message, dismiss } = useMotivation();
//     const [view, setView] = useState("list"); // "list" | "matrix"
//     const [showForm, setShowForm] = useState(false);
//     const [showSettings, setShowSettings] = useState(false);
//     const [editingTask, setEditingTask] = useState(null);
//     const [notifPermission, setNotifPermission] = useState(
//         typeof Notification !== "undefined" ? Notification.permission : "denied"
//     );

//     // User-configurable reminder times, saved on their profile (falls back
//     // to sensible defaults if not set yet).
//     const prepTime = profile?.prepTime || "06:00";
//     const startTime = profile?.startTime || "07:00";

//     const todayTasks = useMemo(
//         () => tasks.filter((t) => t.date === todayISO()),
//         [tasks]
//     );
//     const grade = gradeFor(todayTasks);

//     // --- Alarms for every scheduled activity ---------------------------------
//     // Every 30 seconds we check: is there a task whose "time" field matches
//     // the current HH:MM and hasn't fired yet? If so, fire a browser
//     // notification. This is the simplest reliable way to do in-app alarms
//     // without a backend scheduler — the tab needs to be open for it to work,
//     // which is normal for browser-based reminder apps.
//     useEffect(() => {
//         const firedThisMinute = new Set();
//         const interval = setInterval(() => {
//             const now = new Date();
//             const hhmm = now.toTimeString().slice(0, 5);

//             todayTasks.forEach((task) => {
//                 if (task.time === hhmm && !firedThisMinute.has(task.id)) {
//                     firedThisMinute.add(task.id);
//                     notify(`Time for: ${task.title}`);
//                 }
//             });

//             // The two daily reminders from the project brief — times are
//             // whatever the user set in Settings (see prepTime/startTime below).
//             if (hhmm === prepTime && !firedThisMinute.has("prep")) {
//                 firedThisMinute.add("prep");
//                 notify("Good morning! Take a minute to plan today's schedule.");
//             }
//             if (hhmm === startTime && !firedThisMinute.has("start")) {
//                 firedThisMinute.add("start");
//                 notify("Time to start your first task of the day!");
//             }
//         }, 30 * 1000);

//         return () => clearInterval(interval);
//     }, [todayTasks, prepTime, startTime]);

//     // Fires a visual browser notification AND speaks the reminder out loud
//     // using the Web Speech API's SpeechSynthesis interface — handy for
//     // alarms when you're not looking at the screen.
//     function notify(text) {
//         if (notifPermission === "granted") {
//             new Notification(text);
//         }
//         if (typeof window !== "undefined" && "speechSynthesis" in window) {
//             const utterance = new SpeechSynthesisUtterance(text);
//             utterance.rate = 1;
//             window.speechSynthesis.speak(utterance);
//         }
//     }

//     async function requestNotifications() {
//         const result = await Notification.requestPermission();
//         setNotifPermission(result);
//     }

//     function openEdit(task) {
//         setEditingTask(task);
//         setShowForm(true);
//     }

//     function closeForm() {
//         setShowForm(false);
//         setEditingTask(null);
//     }

//     return (
//         <>
//             <Navbar />
//             <main className="page">
//                 <section className="dashboard-header">
//                     <div>
//                         <h1>Today</h1>
//                         <p className="page-subtitle">
//                             {new Date().toLocaleDateString(undefined, {
//                                 weekday: "long",
//                                 month: "long",
//                                 day: "numeric",
//                             })}
//                         </p>
//                     </div>
//                     <ProgressRing percent={grade.percent} label={`Grade: ${grade.letter}`} />
//                 </section>

//                 {notifPermission !== "granted" && (
//                     <div className="banner">
//                         <span>Turn on notifications to get alarms for every scheduled task.</span>
//                         <button className="btn btn-ghost" onClick={requestNotifications}>
//                             Enable notifications
//                         </button>
//                     </div>
//                 )}

//                 <section className="settings-toggle-row">
//                     <button
//                         className="btn btn-ghost"
//                         onClick={() => setShowSettings((s) => !s)}
//                     >
//                         ⚙️ Reminder times
//                     </button>
//                     {showSettings && (
//                         <ReminderSettings
//                             prepTime={prepTime}
//                             startTime={startTime}
//                             onSave={updateSettings}
//                             onClose={() => setShowSettings(false)}
//                         />
//                     )}
//                 </section>

//                 <section className="toolbar">
//                     <div className="view-toggle">
//                         <button
//                             className={view === "list" ? "active" : ""}
//                             onClick={() => setView("list")}
//                         >
//                             List
//                         </button>
//                         <button
//                             className={view === "matrix" ? "active" : ""}
//                             onClick={() => setView("matrix")}
//                         >
//                             Urgent-Important Matrix
//                         </button>
//                     </div>
//                     <button
//                         className="btn btn-primary"
//                         onClick={() => {
//                             setEditingTask(null);
//                             setShowForm(true);
//                         }}
//                     >
//                         + Add task
//                     </button>
//                 </section>

//                 {view === "list" ? (
//                     <section className="task-list">
//                         {todayTasks.length === 0 && (
//                             <p className="empty-state">
//                                 Nothing scheduled yet — add your first task for today.
//                             </p>
//                         )}
//                         {todayTasks.map((task) => (
//                             <TaskCard key={task.id} task={task} onEdit={openEdit} />
//                         ))}
//                     </section>
//                 ) : (
//                     <MatrixBoard tasks={todayTasks} onEdit={openEdit} />
//                 )}

//                 {showForm && (
//                     <div className="modal-backdrop" onClick={closeForm}>
//                         <div className="modal-card" onClick={(e) => e.stopPropagation()}>
//                             <TaskForm editingTask={editingTask} onDone={closeForm} />
//                         </div>
//                     </div>
//                 )}
//             </main>

//             <MotivationalPopup message={message} onDismiss={dismiss} />
//         </>
//     );
// }

// // Small inline form for editing the two daily reminder times. Kept in this
// // file since it's only ever used from the Dashboard's settings toggle.
// function ReminderSettings({ prepTime, startTime, onSave, onClose }) {
//     const [prep, setPrep] = useState(prepTime);
//     const [start, setStart] = useState(startTime);

//     function handleSubmit(e) {
//         e.preventDefault();
//         onSave({ prepTime: prep, startTime: start });
//         onClose();
//     }

//     return (
//         <form className="reminder-settings" onSubmit={handleSubmit}>
//             <label>
//                 Plan-my-day reminder
//                 <input type="time" value={prep} onChange={(e) => setPrep(e.target.value)} />
//             </label>
//             <label>
//                 Start-tasks reminder
//                 <input type="time" value={start} onChange={(e) => setStart(e.target.value)} />
//             </label>
//             <button type="submit" className="btn btn-primary">
//                 Save
//             </button>
//         </form>
//     );
// }



import { useEffect, useMemo, useState } from "react";
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
    const { profile, updateSettings } = useAuth();
    const { tasks, addTask } = useTasks();
    const { message, dismiss } = useMotivation();
    const [view, setView] = useState("list"); // "list" | "matrix"
    const [showForm, setShowForm] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [notifPermission, setNotifPermission] = useState(
        typeof Notification !== "undefined" ? Notification.permission : "denied"
    );

    // User-configurable reminder times, saved on their profile (falls back
    // to sensible defaults if not set yet).
    const prepTime = profile?.prepTime || "06:00";
    const startTime = profile?.startTime || "07:00";

    const todayTasks = useMemo(
        () => tasks.filter((t) => t.date === todayISO()),
        [tasks]
    );
    const grade = gradeFor(todayTasks);

    // --- Alarms for every scheduled activity ---------------------------------
    // Every 30 seconds we check: is there a task whose "time" field matches
    // the current HH:MM and hasn't fired yet? If so, fire a browser
    // notification. This is the simplest reliable way to do in-app alarms
    // without a backend scheduler — the tab needs to be open for it to work,
    // which is normal for browser-based reminder apps.
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

            // The two daily reminders from the project brief — times are
            // whatever the user set in Settings (see prepTime/startTime below).
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

    // Fires a visual browser notification AND speaks the reminder out loud
    // using the Web Speech API's SpeechSynthesis interface — handy for
    // alarms when you're not looking at the screen.
    function notify(text) {
        if (notifPermission === "granted") {
            new Notification(text);
        }
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
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
                    <button
                        className="btn btn-ghost"
                        onClick={() => setShowSettings((s) => !s)}
                    >
                        ⚙️ Reminder times
                    </button>
                    {showSettings && (
                        <ReminderSettings
                            prepTime={prepTime}
                            startTime={startTime}
                            onSave={updateSettings}
                            onClose={() => setShowSettings(false)}
                        />
                    )}
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

// Small inline form for editing the two daily reminder times. Kept in this
// file since it's only ever used from the Dashboard's settings toggle.
function ReminderSettings({ prepTime, startTime, onSave, onClose }) {
    const [prep, setPrep] = useState(prepTime);
    const [start, setStart] = useState(startTime);

    function handleSubmit(e) {
        e.preventDefault();
        onSave({ prepTime: prep, startTime: start });
        onClose();
    }

    return (
        <form className="reminder-settings" onSubmit={handleSubmit}>
            <label>
                Plan-my-day reminder
                <input type="time" value={prep} onChange={(e) => setPrep(e.target.value)} />
            </label>
            <label>
                Start-tasks reminder
                <input type="time" value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
}