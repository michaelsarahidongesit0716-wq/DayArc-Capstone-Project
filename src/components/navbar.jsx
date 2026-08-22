import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

export default function Navbar() {
    const { profile, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    return (
        <header className="navbar">
            <div className="navbar-brand">DayArc</div>
            <nav className="navbar-links">
                <NavLink to="/" end>
                    Today
                </NavLink>
                <NavLink to="/weekly">Weekly Review</NavLink>
                <NavLink to="/reflect">Reflections</NavLink>
            </nav>
            <div className="navbar-user">
                <span>{profile?.name || "Friend"}</span>
                <button className="btn btn-ghost" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </header>
    );
}