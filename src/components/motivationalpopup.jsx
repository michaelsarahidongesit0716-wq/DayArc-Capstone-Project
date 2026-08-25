export default function MotivationalPopup({ message, onDismiss }) {
    if (!message) return null;

    return (
        <div className="popup-backdrop" onClick={onDismiss}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
                <span className="popup-emoji">✨</span>
                <p>{message}</p>
                <button className="btn btn-ghost" onClick={onDismiss}>
                    Thanks!
                </button>
            </div>
        </div>
    );
}