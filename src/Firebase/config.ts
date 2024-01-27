// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx2d1duewM4Fo8gO6Zu9Vgrg1VRcwVsOE",
  authDomain: "site-victor-5131b.firebaseapp.com",
  projectId: "site-victor-5131b",
  storageBucket: "site-victor-5131b.appspot.com",
  messagingSenderId: "306348411513",
  appId: "1:306348411513:web:47857f7e87533e2dfca2a8",
  measurementId: "G-0FHB6Z1T6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)














