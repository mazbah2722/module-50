// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsmeEVpjMCNgJGygSPd4uGA3J8v67Znd0",
  authDomain: "module-50-ab42b.firebaseapp.com",
  projectId: "module-50-ab42b",
  storageBucket: "module-50-ab42b.appspot.com",
  messagingSenderId: "893390177942",
  appId: "1:893390177942:web:74e5b6c44ab69e2b1aa4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;