// Import the functions you need from the SDKs you need
import config from "./config";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: config.apiKey,
   authDomain: config.authDomain,
   projectId: config.projectId,
   storageBucket: config.storageBucket,
   messagingSenderId: config.messagingSenderId,
   appId: config.appId,
   measurementId: config.measurementId,
};

// const firebaseConfig = {
//    apiKey: process.env.APIKEY,
//    authDomain: process.env.AUTH_DOMAIN,
//    projectId: "instagram-clone-98b68",
//    storageBucket: "instagram-clone-98b68.appspot.com",
//    messagingSenderId: "26831812486",
//    appId: "1:26831812486:web:a12c299f06d09ae561de07",
//    measurementId: "G-VESYJ294F4",
// };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
