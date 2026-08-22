import { Component } from "react";

// React error boundaries catch crashes that happen while rendering and let
// us show something useful instead of a blank white page. This is what
// wraps <App /> in main.jsx.
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, info) {
        // Full details always go to the browser console (F12 -> Console tab)
        // so you can see exactly what broke.
        console.error("DayArc crashed:", error, info);
    }

    render() {
        if (this.state.error) {
            return (
                <div style={{ padding: 40, fontFamily: "sans-serif", maxWidth: 640, margin: "0 auto" }}>
                    <h1 style={{ color: "#ff7a59" }}>Something went wrong</h1>
                    <p>
                        The app hit an error instead of loading. The most common cause is
                        a missing or incorrect Firebase configuration in your{" "}
                        <code>.env</code> file.
                    </p>
                    <pre
                        style={{
                            background: "#f3f3f3",
                            padding: 16,
                            borderRadius: 8,
                            overflow: "auto",
                            fontSize: 13,
                        }}
                    >
                        {String(this.state.error?.message || this.state.error)}
                    </pre>
                    {/* <p>
                        Open the browser console (F12 → Console tab) for the full
                        stack trace, and double-check every <code>VITE_FIREBASE_*</code>{" "}
                        value in <code>.env</code> matches your Firebase project settings
                        exactly.
                    </p> */}
                </div>
            );
        }
        return this.props.children;
    }
}