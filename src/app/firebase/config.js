// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5awkTJEmABX5Kq95fKjiKjRoIBhqfvVM",
  authDomain: "tanad-84005.firebaseapp.com",
  projectId: "tanad-84005",
  storageBucket: "tanad-84005.firebasestorage.app",
  messagingSenderId: "475804962134",
  appId: "1:475804962134:web:b319f48807d3991cc25af7",
  measurementId: "G-1QZ1PT4VXN",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };
