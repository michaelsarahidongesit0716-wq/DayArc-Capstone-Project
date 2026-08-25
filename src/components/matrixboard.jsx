import TaskCard from "./taskcard";

const QUADRANT_META = {
    "urgent-important": { title: "Do First", subtitle: "Urgent & Important" },
    "urgent-not": { title: "Delegate", subtitle: "Urgent, Not Important" },
    "not-urgent-important": { title: "Schedule", subtitle: "Important, Not Urgent" },
    "not-not": { title: "Drop", subtitle: "Not Urgent, Not Important" },
};

export default function MatrixBoard({ tasks, onEdit }) {
    return (
        <div className="matrix-grid">
            {Object.entries(QUADRANT_META).map(([key, meta]) => {
                const quadrantTasks = tasks.filter((t) => t.quadrant === key);
                return (
                    <div key={key} className={`matrix-cell matrix-cell--${key}`}>
                        <div className="matrix-cell-header">
                            <h3>{meta.title}</h3>
                            <span>{meta.subtitle}</span>
                        </div>
                        <div className="matrix-cell-body">
                            {quadrantTasks.length === 0 && (
                                <p className="matrix-empty">Nothing here yet.</p>
                            )}
                            {quadrantTasks.map((task) => (
                                <TaskCard key={task.id} task={task} onEdit={onEdit} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}