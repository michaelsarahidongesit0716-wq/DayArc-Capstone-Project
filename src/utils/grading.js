// // Turns "8 of 10 tasks done" into a percentage and a friendly letter grade.
// // Used for both the single-day grade on the Dashboard and the 7-day
// // productivity percentage on the Weekly Review page.
// export function gradeFor(tasks) {
//     if (!tasks.length) return { percent: 0, letter: "—" };

//     const done = tasks.filter((t) => t.completed).length;
//     const percent = Math.round((done / tasks.length) * 100);

//     let letter = "F";
//     if (percent >= 90) letter = "A";
//     else if (percent >= 80) letter = "B";
//     else if (percent >= 70) letter = "C";
//     else if (percent >= 60) letter = "D";

//     return { percent, letter, done, total: tasks.length };
// }



// Turns "8 of 10 tasks done" into a percentage and a friendly letter grade.
// Used for both the single-day grade on the Dashboard and the 7-day
// productivity percentage on the Weekly Review page.
export function gradeFor(tasks) {
    if (!tasks.length) return { percent: 0, letter: "—" };

    const done = tasks.filter((t) => t.completed).length;
    const percent = Math.round((done / tasks.length) * 100);

    let letter = "F";
    if (percent >= 90) letter = "A";
    else if (percent >= 80) letter = "B";
    else if (percent >= 70) letter = "C";
    else if (percent >= 60) letter = "D";

    return { percent, letter, done, total: tasks.length };
}