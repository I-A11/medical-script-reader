// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO0F2LeLNatnrMn7jghz6IaQdeLHJBEW4",
  authDomain: "scriptuploader-e8129.firebaseapp.com",
  projectId: "scriptuploader-e8129",
  storageBucket: "scriptuploader-e8129.appspot.com",
  messagingSenderId: "532498873762",
  appId: "1:532498873762:web:3736d1aa52d8c0f847c6fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize database
export const db = getDatabase(app);
