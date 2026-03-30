import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBGuW4k-UKU6_TReJw8FNItsvjb2Y77TbQ",
  authDomain: "sold-chat.firebaseapp.com",
  projectId: "sold-chat",
  storageBucket: "sold-chat.firebasestorage.app",
  messagingSenderId: "815204891348",
  appId: "1:815204891348:web:76da2d51db6e0a9d659941",
  measurementId: "G-K90HG4LF9X"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getStorage(FIREBASE_APP);
