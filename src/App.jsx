import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authcontext";
import { TaskProvider } from "./context/taskcontext";
import PrivateRoute from "./components/privateroute";
import OfflineBanner from "./components/Offlinebanner";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import WeeklyReview from "./pages/weeklyreview";
import Reflection from "./pages/reflection";
import Settings from "./pages/settings";

function AgeGroupTheme({ children }) {
  const { profile } = useAuth();
  document.body.setAttribute("data-age-group", profile?.ageGroup || "adult");
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AgeGroupTheme>
          <TaskProvider>
            <OfflineBanner />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/weekly"
                element={
                  <PrivateRoute>
                    <WeeklyReview />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reflect"
                element={
                  <PrivateRoute>
                    <Reflection />
                  </PrivateRoute>
                }
              />

              <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <Settings />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </TaskProvider>
        </AgeGroupTheme>
      </AuthProvider>
    </BrowserRouter>
  );
}