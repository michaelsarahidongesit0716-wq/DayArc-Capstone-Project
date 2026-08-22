// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App


// // import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./context/authcontext";
// // import { TaskProvider } from "./context/taskcontext";
// // import PrivateRoute from "./components/privateroute";
// // import Login from "./pages/login";
// // import Register from "./pages/register";
// // import Dashboard from "./pages/dashboard";
// // import WeeklyReview from "./pages/weeklyReview";
// // import Reflection from "./pages/reflection";

// // // Applies a data-age-group attribute to <body> so CSS can adapt the
// // // experience (font size, colors, playfulness) based on the logged-in
// // // user's age group — this is what makes a child's view feel different
// // // from an adult's or senior's view, using pure CSS, no separate app.
// // function AgeGroupTheme({ children }) {
// //   const { profile } = useAuth();
// //   document.body.setAttribute("data-age-group", profile?.ageGroup || "adult");
// //   return children;
// // }

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <AuthProvider>
// //         <AgeGroupTheme>
// //           <TaskProvider>
// //             <Routes>
// //               <Route path="/login" element={<Login />} />
// //               <Route path="/register" element={<Register />} />
// //               <Route
// //                 path="/"
// //                 element={
// //                   <PrivateRoute>
// //                     <Dashboard />
// //                   </PrivateRoute>
// //                 }
// //               />
// //               <Route
// //                 path="/weekly"
// //                 element={
// //                   <PrivateRoute>
// //                     <WeeklyReview />
// //                   </PrivateRoute>
// //                 }
// //               />
// //               <Route
// //                 path="/reflect"
// //                 element={
// //                   <PrivateRoute>
// //                     <Reflection />
// //                   </PrivateRoute>
// //                 }
// //               />
// //               <Route path="*" element={<Navigate to="/" replace />} />
// //             </Routes>
// //           </TaskProvider>
// //         </AgeGroupTheme>
// //       </AuthProvider>
// //     </BrowserRouter>
// //   );
// // }



// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/authcontext";
// import { TaskProvider } from "./context/taskcontext";
// import PrivateRoute from "./components/privateroute";
// import Login from "./pages/login";
// import Register from "./pages/register";
// import Dashboard from "./pages/dashboard";
// import WeeklyReview from "./pages/weeklyreview";
// import Reflection from "./pages/reflection";

// // Applies a data-age-group attribute to <body> so CSS can adapt the
// // experience (font size, colors, playfulness) based on the logged-in
// // user's age group — this is what makes a child's view feel different
// // from an adult's or senior's view, using pure CSS, no separate app.
// function AgeGroupTheme({ children }) {
//   const { profile } = useAuth();
//   document.body.setAttribute("data-age-group", profile?.ageGroup || "adult");
//   return children;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AgeGroupTheme>
//           <TaskProvider>
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route
//                 path="/"
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/weekly"
//                 element={
//                   <PrivateRoute>
//                     <WeeklyReview />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/reflect"
//                 element={
//                   <PrivateRoute>
//                     <Reflection />
//                   </PrivateRoute>
//                 }
//               />
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </TaskProvider>
//         </AgeGroupTheme>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }





import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authcontext";
import { TaskProvider } from "./context/taskcontext";
import PrivateRoute from "./components/privateroute";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import WeeklyReview from "./pages/weeklyreview";
import Reflection from "./pages/reflection";
import Landing from "./pages/landing";

// Applies a data-age-group attribute to <body> so CSS can adapt the
// experience (font size, colors, playfulness) based on the logged-in
// user's age group — this is what makes a child's view feel different
// from an adult's or senior's view, using pure CSS, no separate app.
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </TaskProvider>
        </AgeGroupTheme>
      </AuthProvider>
    </BrowserRouter>
  );
}
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route
//                 path="/"
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/weekly"
//                 element={
//                   <PrivateRoute>
//                     <WeeklyReview />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/reflect"
//                 element={
//                   <PrivateRoute>
//                     <Reflection />
//                   </PrivateRoute>
//                 }
//               />
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </TaskProvider>
//         </AgeGroupTheme>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }