import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const AGE_GROUPS = [
    { value: "teen", label: "Teenager", hint: "Energetic look, streaks and light gamification." },
    { value: "adult", label: "Adult", hint: "Clean, professional, data-forward." },
];

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        ageGroup: "",
    });
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

            await register(form);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message.replace("Firebase: ", ""));
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="auth-screen">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <p className="auth-subtitle">Let's help you get started with your schedule.</p>

                <label>
                    Full name
                    <input id="fullName" name="fullName" type="text" placeholder="Full Name" required value={form.name} onChange={update("name")} />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={form.password}
                        onChange={update("password")}
                        id="password"
                        name="password"
                        placeholder="Create password"
                    />
                </label>

                <label>
                    Confirm Password
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={form.confirmPassword}
                        onChange={update("confirmPassword")}
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirm password"
                    />
                </label>

                <fieldset className="age-group-picker">
                    <legend>Age group</legend>
                    {AGE_GROUPS.map((group) => (
                        <label
                            key={group.value}
                            className={`age-option ${form.ageGroup === group.value ? "age-option--selected" : ""
                                }`}
                        >
                            <input
                                type="radio"
                                name="ageGroup"
                                value={group.value}
                                checked={form.ageGroup === group.value}
                                onChange={update("ageGroup")}
                            />
                            <div>
                                <strong>{group.label}</strong>
                                <small>{group.hint}</small>
                            </div>
                        </label>
                    ))}
                </fieldset>

                <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? "Creating account…" : "Create account"}
                </button>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </form>
        </div>
    );
}