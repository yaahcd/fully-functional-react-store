import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1H2QxxJShQGE2SsYbo2Da2EvafdDJHKk",
  authDomain: "react-store-d71be.firebaseapp.com",
  projectId: "react-store-d71be",
  storageBucket: "react-store-d71be.appspot.com",
  messagingSenderId: "200569303837",
  appId: "1:200569303837:web:1b7ff4c9f9b59865ae27f4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
