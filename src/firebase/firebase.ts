// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXYYY_VnD_mozra4F3LfT-No9ZT4xMzKU",
  authDomain: "login-99454.firebaseapp.com",
  projectId: "login-99454",
  storageBucket: "login-99454.appspot.com",
  messagingSenderId: "95701136531",
  appId: "1:95701136531:web:525778f9c9ec8bc1c88966",
  measurementId: "G-72SZB9FN44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
