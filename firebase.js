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

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
