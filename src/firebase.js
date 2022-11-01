// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3HJMEFEZD6okBXcFeBP3IOs12xw3doHA",
  authDomain: "tinder-clone-6950c.firebaseapp.com",
  projectId: "tinder-clone-6950c",
  storageBucket: "tinder-clone-6950c.appspot.com",
  messagingSenderId: "627873573631",
  appId: "1:627873573631:web:f71a4347f2537999f8faca",
  measurementId: "G-TXC7BCLZH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);