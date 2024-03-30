// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import Firestore library
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbBpMKGabVaA1kty0RwFFD6N-quzPxntk",
    authDomain: "carapp-98324.firebaseapp.com",
    projectId: "carapp-98324",
    storageBucket: "carapp-98324.appspot.com",
    messagingSenderId: "159239876096",
    appId: "1:159239876096:web:4559305f92a6bac1ecb2e5"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export firestore database so the rest of the app can access
export { db };