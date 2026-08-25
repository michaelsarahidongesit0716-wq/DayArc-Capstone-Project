import { createContext, useContext, useEffect, useState } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./authcontext";
import { todayISO } from "../utils/datehelpers";

const TaskContext = createContext(null);

export function useTasks() {
    return useContext(TaskContext);
}

export function TaskProvider({ children }) {
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!user) {
            setTasks([]);
            return;
        }
        const tasksQuery = query(
            collection(db, "tasks"),
            where("ownerId", "==", user.uid)
        );
        const unsubscribe = onSnapshot(tasksQuery, (snapshot) => {
            const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            list.sort((a, b) => (a.date < b.date ? 1 : -1));
            setTasks(list);
        });
        return unsubscribe;
    }, [user]);

    async function addTask({ title, quadrant, date = todayISO(), time = "" }) {
        await addDoc(collection(db, "tasks"), {
            ownerId: user.uid,
            title,
            quadrant,
            date,
            time,
            completed: false,
            timeSpentSeconds: 0,
            timerStartedAt: null,
        });
    }

    function updateTask(id, changes) {
        return updateDoc(doc(db, "tasks", id), changes);
    }

    function deleteTask(id) {
        return deleteDoc(doc(db, "tasks", id));
    }

    function toggleComplete(task) {
        return updateTask(task.id, { completed: !task.completed });
    }

    function startTimer(task) {
        return updateTask(task.id, { timerStartedAt: Date.now() });
    }

    function stopTimer(task) {
        if (!task.timerStartedAt) return Promise.resolve();
        const elapsed = Math.round((Date.now() - task.timerStartedAt) / 1000);
        return updateTask(task.id, {
            timeSpentSeconds: (task.timeSpentSeconds || 0) + elapsed,
            timerStartedAt: null,
        });
    }

    const value = {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete,
        startTimer,
        stopTimer,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}