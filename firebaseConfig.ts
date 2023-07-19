import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as admin from "firebase-admin";

// Initialize firebase admin SDK with appropriate credentials/config
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSO0bvWmUVeDNMFQWpXAieJEBRLdwM6zM",
  authDomain: "msc-project-85fe1.firebaseapp.com",
  projectId: "msc-project-85fe1",
  storageBucket: "msc-project-85fe1.appspot.com",
  messagingSenderId: "552220350577",
  appId: "1:552220350577:web:91b7e5cf44b6a1a32ee3d0",
  measurementId: "G-BTDNP6VXEE",
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
