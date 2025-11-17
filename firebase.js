// =======================
//  V3xado Shop Firebase
// =======================

// Importaciones Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ============
// CONFIG TUYA
// ============
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
const db = getFirestore(app);


// ===========================
//    FUNCIONES FIREBASE
// ===========================

// --- USUARIOS ---
export async function obtenerUsuario(usuario) {
    const q = query(collection(db, "usuarios"), where("usuario", "==", usuario));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    let data = null;
    snapshot.forEach(doc => data = { id: doc.id, ...doc.data() });
    return data;
}

export async function crearUsuario(usuario, pass, saldo = 0, admin = false) {
    return await addDoc(collection(db, "usuarios"), {
        usuario,
        pass,
        saldo,
        admin,
        createdAt: serverTimestamp()
    });
}

export async function actualizarUsuario(id, data) {
    return await updateDoc(doc(db, "usuarios", id), data);
}

export async function eliminarUsuario(id) {
    return await deleteDoc(doc(db, "usuarios", id));
}


// --- PRODUCTOS ---
export async function obtenerProductos() {
    const snapshot = await getDocs(collection(db, "productos"));
    let lista = [];
    snapshot.forEach(doc => lista.push({ id: doc.id, ...doc.data() }));
    return lista;
}

export async function crearProducto(data) {
    return await addDoc(collection(db, "productos"), data);
}

export async function eliminarProducto(id) {
    return await deleteDoc(doc(db, "productos", id));
}

export async function actualizarProducto(id, data) {
    return await updateDoc(doc(db, "productos", id), data);
}


// --- VENTAS ---
export async function registrarVenta(data) {
    return await addDoc(collection(db, "ventas"), {
        ...data,
        fecha: serverTimestamp()
    });
}

export default db;
