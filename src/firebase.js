// // This file is the ONLY place we talk to the Firebase SDK directly.
// // Everything else in the app imports "auth" and "db" from here.
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Vite exposes any variable prefixed with VITE_ from your .env file
// // through import.meta.env. This keeps your secret keys out of the source code.
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// // If .env is missing or incomplete, fail with a message that actually
// // explains the problem — otherwise Firebase throws a cryptic internal
// // error and the whole app renders as a blank white screen.
// const missingKeys = Object.entries(firebaseConfig)
//     .filter(([, value]) => !value)
//     .map(([key]) => key);

// if (missingKeys.length > 0) {
//     throw new Error(
//         `Missing Firebase config values: ${missingKeys.join(", ")}. ` +
//         `Copy .env.example to .env and fill in your Firebase project's ` +
//         `web app settings (Firebase Console → Project settings → General).`
//     );
// }

// // initializeApp boots up the connection to your specific Firebase project.
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // auth = handles sign up / login / sign out / "who is currently logged in".
// export const auth = getAuth(app);

// // db = the Firestore database where tasks, reflections, and profiles live.
// export const db = getFirestore(app);



// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyDiSvQqip5VMBsBD-b5jqD78S9w9Qwk6Ac",
// //     authDomain: "schedule-list-442f0.firebaseapp.com",
// //     projectId: "schedule-list-442f0",
// //     storageBucket: "schedule-list-442f0.firebasestorage.app",
// //     messagingSenderId: "187072548234",
// //     appId: "1:187072548234:web:af35356eb2eccbbf2b4c73",
// //     measurementId: "G-SL7JKPJN1S"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);



// This file is the ONLY place we talk to the Firebase SDK directly.
// Everything else in the app imports "auth" and "db" from here.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Vite exposes any variable prefixed with VITE_ from your .env file
// through import.meta.env. This keeps your secret keys out of the source code.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// If .env is missing or incomplete, fail with a message that actually
// explains the problem — otherwise Firebase throws a cryptic internal
// error and the whole app renders as a blank white screen.
const missingKeys = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

if (missingKeys.length > 0) {
    throw new Error(
        `Missing Firebase config values: ${missingKeys.join(", ")}. ` +
        `Copy .env.example to .env and fill in your Firebase project's ` +
        `web app settings (Firebase Console → Project settings → General).`
    );
}

// initializeApp boots up the connection to your specific Firebase project.
const app = initializeApp(firebaseConfig);

// auth = handles sign up / login / sign out / "who is currently logged in".
export const auth = getAuth(app);

// db = the Firestore database where tasks, reflections, and profiles live.
export const db = getFirestore(app);