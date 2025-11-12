// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQL5AmWrjbjX21GOzsxe-BcIhKag8rZ0",
  authDomain: "ecotrac-client-auth.firebaseapp.com",
  projectId: "ecotrac-client-auth",
  storageBucket: "ecotrac-client-auth.firebasestorage.app",
  messagingSenderId: "380959500753",
  appId: "1:380959500753:web:926e29907a176fcfd498f0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);