import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
    return (
        <div className="landing-page">

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

            <main className="landing-main">

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

                    <div className="floating-task-card">
                        <div className="floating-check">✓</div>

                        <div>
                            <strong>Today's focus</strong>
                            <p>Stay on schedule</p>
                        </div>
                    </div>

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

            <footer className="landing-footer">
                <span>Simple planning.</span>
                <span>Better focus.</span>
                <span>More intentional days.</span>
            </footer>

        </div>
    );
}

export default Landing;