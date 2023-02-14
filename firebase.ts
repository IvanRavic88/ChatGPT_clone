import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: "chatgpt-messenger-639be.firebaseapp.com",

  projectId: process.env.PROJECT_ID,

  storageBucket: "chatgpt-messenger-639be.appspot.com",

  messagingSenderId: process.env.MESSAGING_SENDER_ID,

  appId: process.env.AP_ID,
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
