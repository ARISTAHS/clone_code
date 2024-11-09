import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChvhn6QfghOGmBsTngJJmlEb3m5-R9Z8E",
  authDomain: "nwitter-reloaded-7f9c4.firebaseapp.com",
  projectId: "nwitter-reloaded-7f9c4",
  storageBucket: "nwitter-reloaded-7f9c4.appspot.com",
  messagingSenderId: "692316540366",
  appId: "1:692316540366:web:be029fc895449973462f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);