// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6mbAmpCkh1Qg8oCRCLSOVrHXDJTB8z_g",
    authDomain: "v3xado-shop.firebaseapp.com",
    projectId: "v3xado-shop",
    storageBucket: "v3xado-shop.firebasestorage.app",
    messagingSenderId: "246252251936",
    appId: "1:246252251936:web:06a027f7b3e0a5d5c6c545"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);

// Exportar Auth
export const auth = getAuth(app);

// Exportar funciones útiles
export {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
