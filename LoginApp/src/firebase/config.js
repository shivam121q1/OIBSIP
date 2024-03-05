// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXwq3iHsbuMfnxgfgsPfbUg9xDImHnhQE",
  authDomain: "login-auth-29556.firebaseapp.com",
  projectId: "login-auth-29556",
  storageBucket: "login-auth-29556.appspot.com",
  messagingSenderId: "358243858717",
  appId: "1:358243858717:web:d44b0c97968c29ec8309f4",
  measurementId: "G-F3HH03F0VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {app,auth}