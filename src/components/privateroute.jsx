import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

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