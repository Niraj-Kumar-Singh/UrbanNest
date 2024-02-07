// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urban-nest-8f1ce.firebaseapp.com",
  projectId: "urban-nest-8f1ce",
  storageBucket: "urban-nest-8f1ce.appspot.com",
  messagingSenderId: "82362681466",
  appId: "1:82362681466:web:a3f2be21e4909d069e13c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);