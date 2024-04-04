import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFyuk5--Q0-yfZlOLTzCW8QslgRr3QWq0",
  authDomain: "erozgar-d2178.firebaseapp.com",
  projectId: "erozgar-d2178",
  storageBucket: "erozgar-d2178.appspot.com",
  messagingSenderId: "424047789272",
  appId: "1:424047789272:web:a508690ba3e347e58e03ad",
  measurementId: "G-P0Q1GRJ7YT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);