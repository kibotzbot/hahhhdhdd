import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chatapp-91287.firebaseapp.com",
  projectId: "chatapp-91287",
  storageBucket: "chatapp-91287.appspot.com",
  messagingSenderId: "881288234439",
  appId: "1:881288234439:web:5d6b0d2243096b77b885e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
