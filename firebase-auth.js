// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvIoCYNYw_v0N8ef0Z70-PEdZoeZrHa-Q",
//   authDomain: "bni-lakshya-ai-banner-st-bba77.firebaseapp.com",
//   projectId: "bni-lakshya-ai-banner-st-bba77",
//   storageBucket: "bni-lakshya-ai-banner-st-bba77.firebasestorage.app",
//   messagingSenderId: "597621457915",
//   appId: "1:597621457915:web:79fa83a5ccec064715c15e"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// window.firebaseAuth = auth;
// window.signInWithEmailAndPassword = signInWithEmailAndPassword;
// window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;


// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   getDocs,
//   query,
//   where,
//   createUserWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   setPersistence,
//   browserSessionPersistence
// } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// // await setPersistence(auth, browserSessionPersistence);

// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc,
//   collection,
//   addDoc,
//   serverTimestamp
// } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// import {
//   getStorage,
//   ref,
//   uploadString,
//   getDownloadURL
// } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvIoCYNYw_v0N8ef0Z70-PEdZoeZrHa-Q",
//   authDomain: "bni-lakshya-ai-banner-st-bba77.firebaseapp.com",
//   projectId: "bni-lakshya-ai-banner-st-bba77",
//   // storageBucket: "bni-lakshya-ai-banner-st-bba77.firebasestorage.app",
//   storageBucket: "bni-lakshya-ai-banner-st-bba77.appspot.com",
//   messagingSenderId: "597621457915",
//   appId: "1:597621457915:web:79fa83a5ccec064715c15e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Services
// const auth = getAuth(app);
// await setPersistence(
//   auth,
//   browserSessionPersistence
// );

// console.log("Firebase Auth Persistence Enabled");
// const db = getFirestore(app);



// // Make available globally
// window.firebaseAuth = auth;
// window.firestoreDB = db;

// // Auth Functions
// window.signInWithEmailAndPassword = signInWithEmailAndPassword;
// window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
// window.signOut = signOut;
// window.onAuthStateChanged = onAuthStateChanged;
// window.sendPasswordResetEmail = sendPasswordResetEmail;

// const storage = getStorage(app);

// window.firebaseStorage = storage;
// window.firebaseStorageRef = ref;
// window.firebaseUploadString = uploadString;
// window.firebaseGetDownloadURL = getDownloadURL;

// // Firestore Functions
// window.doc = doc;
// window.getDoc = getDoc;
// window.setDoc = setDoc;
// window.collection = collection;
// window.addDoc = addDoc;
// window.serverTimestamp = serverTimestamp;

// console.log("Firebase initialized successfully");


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvIoCYNYw_v0N8ef0Z70-PEdZoeZrHa-Q",
//   authDomain: "bni-lakshya-ai-banner-st-bba77.firebaseapp.com",
//   projectId: "bni-lakshya-ai-banner-st-bba77",
//   storageBucket: "bni-lakshya-ai-banner-st-bba77.firebasestorage.app",
//   messagingSenderId: "597621457915",
//   appId: "1:597621457915:web:79fa83a5ccec064715c15e"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// window.firebaseAuth = auth;
// window.signInWithEmailAndPassword = signInWithEmailAndPassword;
// window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,       // ← Required for Forgot Password feature
  verifyPasswordResetCode,    // ← validates the oobCode from email link
  confirmPasswordReset        // ← actually sets the new password
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// await setPersistence(auth, browserSessionPersistence);

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,           // ← Required to query users collection
  query,             // ← Required to build Firestore queries
  where,             // ← Required to filter by email field
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvIoCYNYw_v0N8ef0Z70-PEdZoeZrHa-Q",
  authDomain: "bni-lakshya-ai-banner-st-bba77.firebaseapp.com",
  projectId: "bni-lakshya-ai-banner-st-bba77",
  // storageBucket: "bni-lakshya-ai-banner-st-bba77.firebasestorage.app",
  storageBucket: "bni-lakshya-ai-banner-st-bba77.appspot.com",
  messagingSenderId: "597621457915",
  appId: "1:597621457915:web:79fa83a5ccec064715c15e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Firebase Auth Persistence Enabled");
  })
  .catch(err => {
    console.error("Firebase Auth Persistence Error:", err);
  });
const db = getFirestore(app);



// Make available globally
window.firebaseAuth = auth;
window.firestoreDB = db;

// Auth Functions
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
window.sendPasswordResetEmail = sendPasswordResetEmail; // ← Forgot Password
window.verifyPasswordResetCode = verifyPasswordResetCode;
window.confirmPasswordReset = confirmPasswordReset;

const storage = getStorage(app);

window.firebaseStorage = storage;
window.firebaseStorageRef = ref;
window.firebaseUploadString = uploadString;
window.firebaseGetDownloadURL = getDownloadURL;

// Firestore Functions
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
window.collection = collection;
window.addDoc = addDoc;
window.serverTimestamp = serverTimestamp;
window.getDocs = getDocs;   // ← For email existence check
window.query = query;       // ← For email existence check
window.where = where;       // ← For email existence check

console.log("Firebase initialized successfully");