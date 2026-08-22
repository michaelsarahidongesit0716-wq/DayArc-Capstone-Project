import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

// Wrap any protected page in <PrivateRoute>...</PrivateRoute> (see App.jsx).
// If auth is still loading, show a visible loading state (not a blank
// screen — the Firestore round-trip to fetch the user's profile can take
// a moment, especially on a slow connection). If there's no user, bounce
// to /login. Otherwise render the page.
export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="fullscreen-loader">
                <div className="spinner" />
                <p>Loading your day…</p>
            </div>
        );
    }
    if (!user) return <Navigate to="/login" replace />;
    return children;
}