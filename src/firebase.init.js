// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVzrtpFjDw-xXOD3kg7hHs-aXTe45PPM",
  authDomain: "fir-auth-8cf7d.firebaseapp.com",
  projectId: "fir-auth-8cf7d",
  storageBucket: "fir-auth-8cf7d.appspot.com",
  messagingSenderId: "358624668610",
  appId: "1:358624668610:web:613788a86a67ef7e31845b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;