import { useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../context/authcontext";

const AGE_GROUPS = [
    { value: "teen", label: "Teenager" },
    { value: "adult", label: "Adult" },
];

export default function Settings() {
    const { profile, updateSettings, changePassword } = useAuth();

    // Each section keeps its own local state and its own save button, so
    // saving one section (e.g. reminder times) never touches the others.
    const [name, setName] = useState(profile?.name || "");
    const [ageGroup, setAgeGroup] = useState(profile?.ageGroup || "adult");
    const [profileStatus, setProfileStatus] = useState("");

    const [prepTime, setPrepTime] = useState(profile?.prepTime || "06:00");
    const [startTime, setStartTime] = useState(profile?.startTime || "07:00");
    const [reminderStatus, setReminderStatus] = useState("");

    // voiceEnabled defaults to true if the user has never set it before.
    const [voiceEnabled, setVoiceEnabled] = useState(
        profile?.voiceEnabled !== false
    );
    const [voiceStatus, setVoiceStatus] = useState("");

    const [newPassword, setNewPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function saveProfile(e) {
        e.preventDefault();
        await updateSettings({ name, ageGroup });
        setProfileStatus("Saved.");
        setTimeout(() => setProfileStatus(""), 2000);
    }

    async function saveReminders(e) {
        e.preventDefault();
        await updateSettings({ prepTime, startTime });
        setReminderStatus("Saved.");
        setTimeout(() => setReminderStatus(""), 2000);
    }

    async function saveVoice(nextValue) {
        setVoiceEnabled(nextValue);
        await updateSettings({ voiceEnabled: nextValue });
        setVoiceStatus("Saved.");
        setTimeout(() => setVoiceStatus(""), 2000);
    }

    async function savePassword(e) {
        e.preventDefault();
        setPasswordError("");
        setPasswordStatus("");
        if (newPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            return;
        }
        try {
            await changePassword(newPassword);
            setNewPassword("");
            setPasswordStatus("Password updated.");
            setTimeout(() => setPasswordStatus(""), 2000);
        } catch (err) {
            if (err.code === "auth/requires-recent-login") {
                setPasswordError(
                    "For security, please log out and log back in before changing your password."
                );
            } else {
                setPasswordError(err.message.replace("Firebase: ", ""));
            }
        }
    }

    return (
        <>
            <Navbar />
            <main className="page">
                <h1>Settings</h1>
                <p className="page-subtitle">Manage your profile, reminders, and account.</p>

                <section className="settings-section">
                    <h2>Profile</h2>
                    <form className="settings-form" onSubmit={saveProfile}>
                        <label>
                            Full name
                            <input value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>

                        <fieldset className="age-group-picker">
                            <legend>Are you a teenager or an adult?</legend>
                            {AGE_GROUPS.map((group) => (
                                <label
                                    key={group.value}
                                    className={`age-option ${ageGroup === group.value ? "age-option--selected" : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="ageGroup"
                                        value={group.value}
                                        checked={ageGroup === group.value}
                                        onChange={(e) => setAgeGroup(e.target.value)}
                                    />
                                    <div>
                                        <strong>{group.label}</strong>
                                    </div>
                                </label>
                            ))}
                        </fieldset>

                        <div className="settings-save-row">
                            <button className="btn btn-primary" type="submit">
                                Save profile
                            </button>
                            {profileStatus && <span className="settings-status">{profileStatus}</span>}
                        </div>
                    </form>
                </section>

                <section className="settings-section">
                    <h2>Reminder times</h2>
                    <form className="settings-form settings-form--row" onSubmit={saveReminders}>
                        <label>
                            Plan-my-day reminder
                            <input
                                type="time"
                                value={prepTime}
                                onChange={(e) => setPrepTime(e.target.value)}
                            />
                        </label>
                        <label>
                            Start-tasks reminder
                            <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </label>
                        <div className="settings-save-row">
                            <button className="btn btn-primary" type="submit">
                                Save reminders
                            </button>
                            {reminderStatus && <span className="settings-status">{reminderStatus}</span>}
                        </div>
                    </form>
                </section>

                <section className="settings-section">
                    <h2>Notifications</h2>
                    <div className="settings-toggle-item">
                        <div>
                            <strong>Speak alarms out loud</strong>
                            <p>Uses your browser's built-in voice to read reminders aloud, in addition to the visual notification.</p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={voiceEnabled}
                                onChange={(e) => saveVoice(e.target.checked)}
                            />
                            <span className="switch-track" />
                        </label>
                    </div>
                    {voiceStatus && <span className="settings-status">{voiceStatus}</span>}
                </section>

                <section className="settings-section">
                    <h2>Change password</h2>
                    <form className="settings-form" onSubmit={savePassword}>
                        <label>
                            New password
                            <input
                                type="password"
                                minLength={6}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="At least 6 characters"
                                required
                            />
                        </label>
                        {passwordError && <p className="form-error">{passwordError}</p>}
                        <div className="settings-save-row">
                            <button className="btn btn-primary" type="submit">
                                Update password
                            </button>
                            {passwordStatus && <span className="settings-status">{passwordStatus}</span>}
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}