import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, info) {
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
                </div>
            );
        }
        return this.props.children;
    }
}