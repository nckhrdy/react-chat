// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGmA24-gKNPdoBEoGCpCCPjl8myjnQ7l0",
  authDomain: "friendlychat-112c9.firebaseapp.com",
  databaseURL: "https://friendlychat-112c9-default-rtdb.firebaseio.com",
  projectId: "friendlychat-112c9",
  storageBucket: "friendlychat-112c9.appspot.com",
  messagingSenderId: "358836810536",
  appId: "1:358836810536:web:3bbe2cdf900c884094d61d",
  //measurementId: "G-FVZKBNYYK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);