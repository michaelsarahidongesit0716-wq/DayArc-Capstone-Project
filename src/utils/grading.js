export function gradeFor(tasks) {
    if (!tasks.length) return { percent: 0, letter: "—" };

    const done = tasks.filter((t) => t.completed).length;
    const percent = Math.round((done / tasks.length) * 100);

    let letter = "F";
    if (percent >= 90) letter = "A";
    else if (percent >= 80) letter = "B";
    else if (percent >= 70) letter = "C";
    else if (percent >= 60) letter = "D";
    else if (percent >= 50) letter = "E";
    return { percent, letter, done, total: tasks.length };
}