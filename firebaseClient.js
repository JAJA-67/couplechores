// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnRIhSE6f6Z0Ccs4CGbjP49BkfJSCrzw8",
  authDomain: "lovebank-67a55.firebaseapp.com",
  projectId: "lovebank-67a55",
  storageBucket: "lovebank-67a55.firebasestorage.app",
  messagingSenderId: "218336388779",
  appId: "1:218336388779:web:3b19de4f95779f615d39ee",
  measurementId: "G-4E5ZP77P0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
