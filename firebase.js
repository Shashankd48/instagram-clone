// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAFIJWKxEDfOFwO-i1-1_8S1lggKMOIlgU",
   authDomain: "instagram-clone-98b68.firebaseapp.com",
   projectId: "instagram-clone-98b68",
   storageBucket: "instagram-clone-98b68.appspot.com",
   messagingSenderId: "26831812486",
   appId: "1:26831812486:web:a12c299f06d09ae561de07",
   measurementId: "G-VESYJ294F4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage };
