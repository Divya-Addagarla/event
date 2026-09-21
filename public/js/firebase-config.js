import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYYnipEfxUjEABGeoVjInHkjUAjwVO0Ic",
  authDomain: "rohit-cfa94.firebaseapp.com",
  projectId: "rohit-cfa94",
  storageBucket: "rohit-cfa94.firebasestorage.app",
  messagingSenderId: "451985317742",
  appId: "1:451985317742:web:663c0fba21da57b3a0eb7f",
  measurementId: "G-DQ1S2R9XM8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, updateDoc, increment };