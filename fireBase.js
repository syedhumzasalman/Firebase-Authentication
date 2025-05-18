import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { sendPasswordResetEmail, deleteUser, verifyBeforeUpdateEmail, updateEmail, updateProfile, updatePassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC27R3xuZ3QyH8R3TIKILBn3zLU8EqA3PU",
  authDomain: "fir-first-project-9ae41.firebaseapp.com",
  projectId: "fir-first-project-9ae41",
  storageBucket: "fir-first-project-9ae41.firebasestorage.app",
  messagingSenderId: "462267398062",
  appId: "1:462267398062:web:37d2e82b362cde29a93a3f",
  measurementId: "G-RS4LW8XMGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// console.log(app);


export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  googleProvider,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  updatePassword,
  updateProfile,
  updateEmail,
  verifyBeforeUpdateEmail,
  deleteUser,
  sendPasswordResetEmail,
}



