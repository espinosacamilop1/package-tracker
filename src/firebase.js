// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3o0C3ae06dV1ms65pAHvlkec9xt4zBJo",
  authDomain: "package-tracker-34e9e.firebaseapp.com",
  projectId: "package-tracker-34e9e",
  storageBucket: "package-tracker-34e9e.appspot.com",
  messagingSenderId: "52037573836",
  appId: "1:52037573836:web:36e2d57e1c6c0459603669",
  measurementId: "G-H4H50R2G3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);