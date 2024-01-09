// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWQTr1-kp29MEkUavM7hME-RR6thRhgE",
  authDomain: "fir-ex-3861b.firebaseapp.com",
  projectId: "fir-ex-3861b",
  storageBucket: "fir-ex-3861b.appspot.com",
  messagingSenderId: "70155750316",
  appId: "1:70155750316:web:3267e78335f942f83f0809",
  measurementId: "G-R8XB5WRS3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage}


