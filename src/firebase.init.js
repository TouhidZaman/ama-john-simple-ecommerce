// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA0kBTXksIBjDdxFiItRwG8JRkf_kp-oLc",
   authDomain: "ema-john-shoopping.firebaseapp.com",
   projectId: "ema-john-shoopping",
   storageBucket: "ema-john-shoopping.appspot.com",
   messagingSenderId: "399186957354",
   appId: "1:399186957354:web:fd06b04836a7c398195f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// Hosting steps 
// 1. npm install -g firebase-tools
// 2. firebase login
// 3. firebase init
// 4. firebase deploy

