// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUz-K5UiPXuIClGG8Z-5PT-3FVJiYxTAw",
    authDomain: "imoney-be628.firebaseapp.com",
    projectId: "imoney-be628",
    storageBucket: "imoney-be628.appspot.com",
    messagingSenderId: "468850293600",
    appId: "1:468850293600:web:abe9c18e2933ac748fbc05",
    measurementId: "G-9944YPSC7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const store = getFirestore(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, store };
