// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gallery-452c7.firebaseapp.com",
  projectId: "gallery-452c7",
  storageBucket: "gallery-452c7.appspot.com",
  messagingSenderId: "1056060767532",
  appId: "1:1056060767532:web:030c2210017e173c884089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()