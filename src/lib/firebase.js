// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBww_5BhFwputBsU3oucaNQkLZUR_gEO_A",
    authDomain: "minihckathon.firebaseapp.com",
    projectId: "minihckathon",
    storageBucket: "minihckathon.firebasestorage.app",
    messagingSenderId: "42651674885",
    appId: "1:42651674885:web:d6c565d0b8d46eb6de2f6c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);