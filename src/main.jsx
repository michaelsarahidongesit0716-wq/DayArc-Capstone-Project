// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// // createRoot + render is the standard React 18 way to boot an app into
// // the <div id="root"> defined in index.html. StrictMode does extra
// // development-only checks to help catch bugs early.
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/errorboundary";
import "./index.css";

// createRoot + render is the standard React 18 way to boot an app into
// the <div id="root"> defined in index.html. StrictMode does extra
// development-only checks to help catch bugs early. ErrorBoundary makes
// sure a crash shows a real message instead of a blank white page.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);