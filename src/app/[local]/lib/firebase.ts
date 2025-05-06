// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5awkTJEmABX5Kq95fKjiKjRoIBhqfvVM",
  authDomain: "tanad-84005.firebaseapp.com",
  projectId: "tanad-84005",
  storageBucket: "tanad-84005.firebasestorage.app",
  messagingSenderId: "475804962134",
  appId: "1:475804962134:web:b319f48807d3991cc25af7",
  measurementId: "G-1QZ1PT4VXN",
};

export const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

const auth = getAuth(app);

export { auth };
