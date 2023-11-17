// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA24rWWnBURGc4NTZIphQcAIpNlVTvucF8",
  authDomain: "job-portal-6abff.firebaseapp.com",
  projectId: "job-portal-6abff",
  storageBucket: "job-portal-6abff.appspot.com",
  messagingSenderId: "17886706169",
  appId: "1:17886706169:web:1c5e84521924549a38a528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};