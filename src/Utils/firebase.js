// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4WZ1s9zxnzSElAz8dVwe8qPyT-xwQ2TI",
  authDomain: "netflixindiagpt.firebaseapp.com",
  projectId: "netflixindiagpt",
  storageBucket: "netflixindiagpt.appspot.com",
  messagingSenderId: "726378164914",
  appId: "1:726378164914:web:3d6a4fa1c75696a803cfab",
  measurementId: "G-3F1K1TVJ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);