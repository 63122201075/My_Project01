import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue,set } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChE7dc9dHW3LSNnBjkRM-34yYYzBa5j34",
  authDomain: "myproject-923c0.firebaseapp.com",
  databaseURL: "https://myproject-923c0-default-rtdb.firebaseio.com",
  projectId: "myproject-923c0",
  storageBucket: "myproject-923c0.appspot.com",
  messagingSenderId: "151462714705",
  appId: "1:151462714705:web:2bad2f058117a68caac770",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // ต้องส่ง `app` เข้ามาด้วย

export { db, ref, onValue ,set};
