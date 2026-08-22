// import React from "react";
// import { Link } from "react-router-dom";
// import "./landing.css";

// function Landing() {
//     return (
//         <div className="landing-page">

//             {/* Navigation */}
//             <nav className="landing-nav">
//                 <div className="dayarc-logo">
//                     <div className="logo-icon">D</div>
//                     <span>DayArc</span>
//                 </div>

//                 <div className="landing-nav-right">
//                     <span>Plan</span>
//                     <span>Track</span>
//                     <span>Reflect</span>
//                 </div>
//             </nav>

//             {/* Main Hero Section */}
//             <main className="landing-main">

//                 {/* Left Side */}
//                 <section className="landing-content">

//                     <div className="small-label">
//                         YOUR DAY, YOUR WAY
//                     </div>

//                     <h1>
//                         Make every day
//                         <br />
//                         <span>count.</span>
//                     </h1>

//                     <p className="landing-description">
//                         DayArc helps you organize your daily activities, set priorities,
//                         stay on track and reflect on your progress.
//                     </p>

//                     <div className="landing-actions">
//                         <Link to="/register" className="get-started-btn">
//                             Get Started
//                             <span>→</span>
//                         </Link>
//                     </div>

//                     <div className="landing-features">
//                         <div>
//                             <span className="feature-dot"></span>
//                             Plan your day
//                         </div>

//                         <div>
//                             <span className="feature-dot teal"></span>
//                             Track your progress
//                         </div>

//                         <div>
//                             <span className="feature-dot lavender"></span>
//                             Reflect weekly
//                         </div>
//                     </div>

//                 </section>

//                 {/* Right Side - Calendar */}
//                 <section className="calendar-section">

//                     <div className="calendar-decoration decoration-one"></div>
//                     <div className="calendar-decoration decoration-two"></div>

//                     <div className="calendar-card">

//                         <div className="calendar-top">
//                             <div>
//                                 <p className="calendar-month">AUGUST</p>
//                                 <h2>2026</h2>
//                             </div>

//                             <div className="calendar-small-icon">
//                                 ✓
//                             </div>
//                         </div>

//                         <div className="calendar-weekdays">
//                             <span>MON</span>
//                             <span>TUE</span>
//                             <span>WED</span>
//                             <span>THU</span>
//                             <span>FRI</span>
//                             <span>SAT</span>
//                             <span>SUN</span>
//                         </div>

//                         <div className="calendar-days">

//                             <span className="muted-day">27</span>
//                             <span className="muted-day">28</span>
//                             <span className="muted-day">29</span>
//                             <span className="muted-day">30</span>
//                             <span className="muted-day">31</span>

//                             <span>1</span>
//                             <span>2</span>

//                             <span>3</span>
//                             <span>4</span>
//                             <span>5</span>
//                             <span>6</span>
//                             <span>7</span>
//                             <span>8</span>
//                             <span>9</span>

//                             <span>10</span>
//                             <span>11</span>
//                             <span>12</span>
//                             <span>13</span>
//                             <span>14</span>
//                             <span>15</span>
//                             <span>16</span>

//                             <span>17</span>
//                             <span>18</span>

//                             <span className="today">19</span>

//                             <span>20</span>
//                             <span>21</span>
//                             <span>22</span>
//                             <span>23</span>

//                             <span>24</span>
//                             <span>25</span>
//                             <span>26</span>
//                             <span>27</span>
//                             <span>28</span>
//                             <span>29</span>
//                             <span>30</span>

//                             <span>31</span>
//                         </div>

//                         <div className="calendar-footer">
//                             <div className="footer-line"></div>

//                             <div className="calendar-note">
//                                 <span className="note-icon">✓</span>
//                                 <span>Plan. Progress. Reflect.</span>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Floating task card */}
//                     <div className="floating-task-card">
//                         <div className="floating-check">✓</div>

//                         <div>
//                             <strong>Today's focus</strong>
//                             <p>Stay on schedule</p>
//                         </div>
//                     </div>

//                     {/* Floating progress card */}
//                     <div className="floating-progress-card">
//                         <div className="progress-circle">
//                             <span>80%</span>
//                         </div>

//                         <div>
//                             <strong>Daily progress</strong>
//                             <p>Keep going!</p>
//                         </div>
//                     </div>

//                 </section>

//             </main>

//             {/* Bottom statement */}
//             <footer className="landing-footer">
//                 <span>Simple planning.</span>
//                 <span>Better focus.</span>
//                 <span>More intentional days.</span>
//             </footer>

//         </div>
//     );
// }

// export default Landing;




// import { Link } from "react-router-dom";
// import ProgressRing from "../components/progressring";

// // The FEATURES array drives the feature-grid section below — add or edit
// // an entry here and the grid updates automatically, same pattern as
// // AGE_GROUPS in Register.jsx and QUADRANTS in TaskForm.jsx.
// const FEATURES = [
//     {
//         emoji: "⏰",
//         title: "Alarms & reminders",
//         text: "Every task gets its own alarm, plus a daily nudge to plan your day and get moving.",
//     },
//     {
//         emoji: "🧭",
//         title: "Urgent-Important Matrix",
//         text: "Sort what actually matters from what just feels urgent, at a glance.",
//     },
//     {
//         emoji: "⏱️",
//         title: "Time tracking",
//         text: "Start and stop a timer on any task to see where your day really goes.",
//     },
//     {
//         emoji: "📊",
//         title: "Weekly reviews",
//         text: "A productivity percentage and chart for your week — no spreadsheet required.",
//     },
//     {
//         emoji: "📝",
//         title: "Reflection journal",
//         text: "Quick daily or weekly reflections to notice patterns and celebrate progress.",
//     },
//     {
//         emoji: "✨",
//         title: "Built for you",
//         text: "Teen or adult — the whole experience adjusts its look and feel to match.",
//     },
// ];

// export default function Landing() {
//     return (
//         <div className="landing">
//             <header className="landing-nav">
//                 <div className="navbar-brand">DayArc</div>
//                 <Link to="/login" className="btn btn-ghost">
//                     Log in
//                 </Link>
//             </header>

//             <section className="landing-hero">
//                 <div className="landing-hero-copy">
//                     <h1>Your day, mapped out and looked after.</h1>
//                     <p className="landing-subtitle">
//                         DayArc helps you schedule your day, prioritize what matters, track
//                         your time, and reflect on how it went — with alarms and
//                         encouragement built in, so you're never doing it alone.
//                     </p>
//                     <div className="landing-cta-row">
//                         <Link to="/register" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>
//                             Get Started
//                         </Link>
//                         <Link to="/login" className="landing-cta-secondary">
//                             Already have an account? Log in
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="landing-hero-visual">
//                     <ProgressRing percent={72} label="Today" size={180} />
//                 </div>
//             </section>

//             <section className="landing-features">
//                 <h2>Everything you need for a productive day</h2>
//                 <div className="landing-feature-grid">
//                     {FEATURES.map((feature) => (
//                         <div key={feature.title} className="landing-feature-card">
//                             <span className="landing-feature-emoji" aria-hidden="true">
//                                 {feature.emoji}
//                             </span>
//                             <h3>{feature.title}</h3>
//                             <p>{feature.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section className="landing-final-cta">
//                 <h2>Ready to get your day in order?</h2>
//                 <Link to="/register" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>
//                     Get Started
//                 </Link>
//             </section>
//         </div>
//     );
// }




import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
    return (
        <div className="landing-page">

            {/* Navigation */}
            <nav className="landing-nav">
                <div className="dayarc-logo">
                    <div className="logo-icon">D</div>
                    <span>DayArc</span>
                </div>

                <div className="landing-nav-right">
                    <span>Plan</span>
                    <span>Track</span>
                    <span>Reflect</span>
                </div>
            </nav>

            {/* Main Hero Section */}
            <main className="landing-main">

                {/* Left Side */}
                <section className="landing-content">

                    <div className="small-label">
                        YOUR DAY, YOUR WAY
                    </div>

                    <h1>
                        Make every day
                        <br />
                        <span>count.</span>
                    </h1>

                    <p className="landing-description">
                        DayArc helps you organize your daily activities, set priorities,
                        stay on track and reflect on your progress.
                    </p>

                    <div className="landing-actions">
                        <Link to="/register" className="get-started-btn">
                            Get Started
                            <span>→</span>
                        </Link>
                    </div>

                    <div className="landing-features">
                        <div>
                            <span className="feature-dot"></span>
                            Plan your day
                        </div>

                        <div>
                            <span className="feature-dot teal"></span>
                            Track your progress
                        </div>

                        <div>
                            <span className="feature-dot lavender"></span>
                            Reflect weekly
                        </div>
                    </div>

                </section>

                {/* Right Side - Calendar */}
                <section className="calendar-section">

                    <div className="calendar-decoration decoration-one"></div>
                    <div className="calendar-decoration decoration-two"></div>

                    <div className="calendar-card">

                        <div className="calendar-top">
                            <div>
                                <p className="calendar-month">AUGUST</p>
                                <h2>2026</h2>
                            </div>

                            <div className="calendar-small-icon">
                                ✓
                            </div>
                        </div>

                        <div className="calendar-weekdays">
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WED</span>
                            <span>THU</span>
                            <span>FRI</span>
                            <span>SAT</span>
                            <span>SUN</span>
                        </div>

                        <div className="calendar-days">

                            <span className="muted-day">27</span>
                            <span className="muted-day">28</span>
                            <span className="muted-day">29</span>
                            <span className="muted-day">30</span>
                            <span className="muted-day">31</span>

                            <span>1</span>
                            <span>2</span>

                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>

                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>

                            <span>17</span>
                            <span>18</span>

                            <span className="today">19</span>

                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>

                            <span>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>

                            <span>31</span>
                        </div>

                        <div className="calendar-footer">
                            <div className="footer-line"></div>

                            <div className="calendar-note">
                                <span className="note-icon">✓</span>
                                <span>Plan. Progress. Reflect.</span>
                            </div>
                        </div>

                    </div>

                    {/* Floating task card */}
                    <div className="floating-task-card">
                        <div className="floating-check">✓</div>

                        <div>
                            <strong>Today's focus</strong>
                            <p>Stay on schedule</p>
                        </div>
                    </div>

                    {/* Floating progress card */}
                    <div className="floating-progress-card">
                        <div className="progress-circle">
                            <span>80%</span>
                        </div>

                        <div>
                            <strong>Daily progress</strong>
                            <p>Keep going!</p>
                        </div>
                    </div>

                </section>

            </main>

            {/* Bottom statement */}
            <footer className="landing-footer">
                <span>Simple planning.</span>
                <span>Better focus.</span>
                <span>More intentional days.</span>
            </footer>

        </div>
    );
}

export default Landing;





// import { Link } from "react-router-dom";
// import "./landing.css";

// // The FEATURES array drives the feature-grid section below — add or edit
// // an entry here and the grid updates automatically, same pattern as
// // AGE_GROUPS in Register.jsx and QUADRANTS in TaskForm.jsx.
// const FEATURES = [
//     {
//         emoji: "⏰",
//         title: "Alarms & reminders",
//         text: "Every task gets its own alarm, plus a daily nudge to plan your day and get moving.",
//     },
//     {
//         emoji: "🧭",
//         title: "Urgent-Important Matrix",
//         text: "Sort what actually matters from what just feels urgent, at a glance.",
//     },
//     {
//         emoji: "⏱️",
//         title: "Time tracking",
//         text: "Start and stop a timer on any task to see where your day really goes.",
//     },
//     {
//         emoji: "📊",
//         title: "Weekly reviews",
//         text: "A productivity percentage and chart for your week — no spreadsheet required.",
//     },
//     {
//         emoji: "📝",
//         title: "Reflection journal",
//         text: "Quick daily or weekly reflections to notice patterns and celebrate progress.",
//     },
//     {
//         emoji: "✨",
//         title: "Built for you",
//         text: "Teen or adult — the whole experience adjusts its look and feel to match.",
//     },
// ];

// function Landing() {
//     return (
//         <div className="landing-page">

//             {/* Navigation */}
//             <nav className="landing-nav">
//                 <div className="dayarc-logo">
//                     <div className="logo-icon">D</div>
//                     <span>DayArc</span>
//                 </div>

//                 <div className="landing-nav-right">
//                     <span>Plan</span>
//                     <span>Track</span>
//                     <span>Reflect</span>
//                 </div>
//             </nav>

//             {/* Main Hero Section */}
//             <main className="landing-main">

//                 {/* Left Side */}
//                 <section className="landing-content">

//                     <div className="small-label">
//                         YOUR DAY, YOUR WAY
//                     </div>

//                     <h1>
//                         Make every day
//                         <br />
//                         <span>count.</span>
//                     </h1>

//                     <p className="landing-description">
//                         DayArc helps you organize your daily activities, set priorities,
//                         stay on track and reflect on your progress.
//                     </p>

//                     <div className="landing-actions">
//                         <Link to="/register" className="get-started-btn">
//                             Get Started
//                             <span>→</span>
//                         </Link>
//                     </div>

//                     <div className="landing-features">
//                         <div>
//                             <span className="feature-dot"></span>
//                             Plan your day
//                         </div>

//                         <div>
//                             <span className="feature-dot teal"></span>
//                             Track your progress
//                         </div>

//                         <div>
//                             <span className="feature-dot lavender"></span>
//                             Reflect weekly
//                         </div>
//                     </div>

//                 </section>

//                 {/* Right Side - Calendar */}
//                 <section className="calendar-section">

//                     <div className="calendar-decoration decoration-one"></div>
//                     <div className="calendar-decoration decoration-two"></div>

//                     <div className="calendar-card">

//                         <div className="calendar-top">
//                             <div>
//                                 <p className="calendar-month">AUGUST</p>
//                                 <h2>2026</h2>
//                             </div>

//                             <div className="calendar-small-icon">
//                                 ✓
//                             </div>
//                         </div>

//                         <div className="calendar-weekdays">
//                             <span>MON</span>
//                             <span>TUE</span>
//                             <span>WED</span>
//                             <span>THU</span>
//                             <span>FRI</span>
//                             <span>SAT</span>
//                             <span>SUN</span>
//                         </div>

//                         <div className="calendar-days">

//                             <span className="muted-day">27</span>
//                             <span className="muted-day">28</span>
//                             <span className="muted-day">29</span>
//                             <span className="muted-day">30</span>
//                             <span className="muted-day">31</span>

//                             <span>1</span>
//                             <span>2</span>

//                             <span>3</span>
//                             <span>4</span>
//                             <span>5</span>
//                             <span>6</span>
//                             <span>7</span>
//                             <span>8</span>
//                             <span>9</span>

//                             <span>10</span>
//                             <span>11</span>
//                             <span>12</span>
//                             <span>13</span>
//                             <span>14</span>
//                             <span>15</span>
//                             <span>16</span>

//                             <span>17</span>
//                             <span>18</span>

//                             <span className="today">19</span>

//                             <span>20</span>
//                             <span>21</span>
//                             <span>22</span>
//                             <span>23</span>

//                             <span>24</span>
//                             <span>25</span>
//                             <span>26</span>
//                             <span>27</span>
//                             <span>28</span>
//                             <span>29</span>
//                             <span>30</span>

//                             <span>31</span>
//                         </div>

//                         <div className="calendar-footer">
//                             <div className="footer-line"></div>

//                             <div className="calendar-note">
//                                 <span className="note-icon">✓</span>
//                                 <span>Plan. Progress. Reflect.</span>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Floating task card */}
//                     <div className="floating-task-card">
//                         <div className="floating-check">✓</div>

//                         <div>
//                             <strong>Today's focus</strong>
//                             <p>Stay on schedule</p>
//                         </div>
//                     </div>

//                     {/* Floating progress card */}
//                     <div className="floating-progress-card">
//                         <div className="progress-circle">
//                             <span>80%</span>
//                         </div>

//                         <div>
//                             <strong>Daily progress</strong>
//                             <p>Keep going!</p>
//                         </div>
//                     </div>

//                 </section>

//             </main>

//             {/* Feature grid section */}
//             <section className="landing-feature-section">
//                 <h2>Everything you need for a productive day</h2>
//                 <div className="landing-feature-grid">
//                     {FEATURES.map((feature) => (
//                         <div key={feature.title} className="landing-feature-card">
//                             <span className="landing-feature-emoji" aria-hidden="true">
//                                 {feature.emoji}
//                             </span>
//                             <h3>{feature.title}</h3>
//                             <p>{feature.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Bottom statement */}
//             <footer className="landing-footer">
//                 <span>Simple planning.</span>
//                 <span>Better focus.</span>
//                 <span>More intentional days.</span>
//             </footer>

//         </div>
//     );
// }

// export default Landing;