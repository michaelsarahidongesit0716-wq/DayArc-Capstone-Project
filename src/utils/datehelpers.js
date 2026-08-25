export function todayISO() {
    return new Date().toISOString().slice(0, 10);
}

export function currentWeekDates() {
    const now = new Date();
    const day = now.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + mondayOffset);

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        dates.push(d.toISOString().slice(0, 10));
    }
    return dates;
}

export function weekdayLabel(isoDate) {
    return new Date(isoDate + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "short",
    });
}

export function formatMinutes(totalSeconds = 0) {
    const mins = Math.round(totalSeconds / 60);
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    const rem = mins % 60;
    return `${hrs}h ${rem}m`;
}