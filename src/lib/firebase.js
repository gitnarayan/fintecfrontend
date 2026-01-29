// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// // src/lib/firebase.js
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5CrUgLnwAIgxs46biJIqTCkJ7YVI1irY",
//   authDomain: "metrofintec-d9351.firebaseapp.com",
//   projectId: "metrofintec-d9351",
//   storageBucket: "metrofintec-d9351.firebasestorage.app",
//   messagingSenderId: "385955408400",
//   appId: "1:385955408400:web:bdfd7b23509f12462c3895",
//   measurementId: "G-HRB4T9EFJ0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// // src/lib/firebase.js

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // ✅ prevent multiple initialization (VERY IMPORTANT for Next.js)
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// // ✅ export auth
// export const auth = getAuth(app);

// export default app;






// // src/lib/firebaseClient.js
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5CrUgLnwAIgxs46biJIqTCkJ7YVI1irY",
//   authDomain: "metrofintec-d9351.firebaseapp.com",
//   projectId: "metrofintec-d9351",
//   storageBucket: "metrofintec-d9351.appspot.com",
//   messagingSenderId: "385955408400",
//   appId: "1:385955408400:web:bdfd7b23509f12462c3895",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);




// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5CrUgLnwAIgxs46biJIqTCkJ7YVI1irY",
  authDomain: "metrofintec-d9351.firebaseapp.com",
  projectId: "metrofintec-d9351",
  storageBucket: "metrofintec-d9351.appspot.com",
  messagingSenderId: "385955408400",
  appId: "1:385955408400:web:bdfd7b23509f12462c3895",
};

// ✅ prevent re-initialization (critical for Next.js)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ THIS must exist
export const auth = getAuth(app);
