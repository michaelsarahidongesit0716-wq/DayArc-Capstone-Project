import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
} from "chart.js";
import Navbar from "../components/navbar";
import ProgressRing from "../components/progressring";
import { useTasks } from "../context/taskcontext";
import { currentWeekDates, weekdayLabel, formatMinutes } from "../utils/datehelpers";
import { gradeFor } from "../utils/grading";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function WeeklyReview() {
    const { tasks } = useTasks();
    const weekDates = currentWeekDates();

    const dailyGrades = useMemo(
        () =>
            weekDates.map((date) => {
                const dayTasks = tasks.filter((t) => t.date === date);
                return { date, ...gradeFor(dayTasks) };
            }),
        [tasks, weekDates]
    );

    const weekTasks = tasks.filter((t) => weekDates.includes(t.date));
    const weekGrade = gradeFor(weekTasks);
    const totalMinutes = weekTasks.reduce(
        (sum, t) => sum + (t.timeSpentSeconds || 0),
        0
    );

    const chartData = {
        labels: weekDates.map(weekdayLabel),
        datasets: [
            {
                label: "Productivity %",
                data: dailyGrades.map((d) => d.percent),
                backgroundColor: "#4C9F70",
                borderRadius: 8,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { min: 0, max: 100, ticks: { stepSize: 20 } } },
    };

    return (
        <>
            <Navbar />
            <main className="page">
                <section className="dashboard-header">
                    <div>
                        <h1>Weekly Review</h1>
                        <p className="page-subtitle">
                            {weekdayLabel(weekDates[0])} – {weekdayLabel(weekDates[6])}
                        </p>
                    </div>
                    <ProgressRing percent={weekGrade.percent} label="This week" />
                </section>

                <section className="stat-row">
                    <div className="stat-card">
                        <strong>{weekGrade.done || 0}</strong>
                        <span>Tasks completed</span>
                    </div>
                    <div className="stat-card">
                        <strong>{weekGrade.total || 0}</strong>
                        <span>Tasks scheduled</span>
                    </div>
                    <div className="stat-card">
                        <strong>{formatMinutes(totalMinutes)}</strong>
                        <span>Time tracked</span>
                    </div>
                </section>

                <section className="chart-card">
                    <Bar data={chartData} options={chartOptions} />
                </section>
            </main>
        </>
    );
}