// lib/auth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { app, auth } from "./firebase";

export const signup = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = async () => {
  const auth = getAuth(app);

  try {
    await signOut(auth); // Sign out from Firebase
  } catch (err) {
    console.error("Error signing out from Firebase:", err);
  }

  try {
    await fetch("/api/session", {
      method: "DELETE",
    }); // Remove session cookie
  } catch (err) {
    console.error("Error deleting session:", err);
  }

  // No redirect
};
