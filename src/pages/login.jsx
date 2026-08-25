import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function update(field) {
        return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            await login(form);
            navigate("/dashboard");
        } catch (err) {

            setError("Incorrect email or password.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="auth-screen">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Welcome back</h1>

                <label>
                    Email
                    <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        required
                        value={form.password}
                        onChange={update("password")}
                    />
                </label>

                {error && <p className="form-error">{error}</p>}

                <button className="btn btn-primary" disabled={submitting}></button>

                <button className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Logging in…" : "Log in"}
                </button>

                <p className="auth-switch">
                    New here? <Link to="/register">Create an account</Link>
                </p>
            </form>
        </div>
    );
}