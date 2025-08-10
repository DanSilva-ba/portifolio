// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfWV7T0tk3ZiWqRSMpVjFuxq-PpWoTu2M",
  authDomain: "portifolio-b3021.firebaseapp.com",
  projectId: "portifolio-b3021",
  storageBucket: "portifolio-b3021.firebasestorage.app",
  messagingSenderId: "472034163726",
  appId: "1:472034163726:web:beeab51f000c2172eb505f",
  measurementId: "G-K3FPG2T0KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);