import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL74t37-Ypaba1WJB0iq-I8wWHqkubDEM",
  authDomain: "parking-slot-detection-4ff30.firebaseapp.com",
  projectId: "parking-slot-detection-4ff30",
  storageBucket: "parking-slot-detection-4ff30.appspot.com",
  messagingSenderId: "856654573813",
  appId: "1:856654573813:web:131c07a1bc2fd7bdd815bc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
