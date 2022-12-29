// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84WqbzbLD3o7QpjIqlrWlWc4pLMm1lYc",
  authDomain: "redux-auth-a8b2a.firebaseapp.com",
  projectId: "redux-auth-a8b2a",
  storageBucket: "redux-auth-a8b2a.appspot.com",
  messagingSenderId: "827518091490",
  appId: "1:827518091490:web:54018318b0d073f2d2debb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
