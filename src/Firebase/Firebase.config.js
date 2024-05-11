// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHIdSPCysi3aBwEOFQd7aJGDPTNVZEhsM",
    authDomain: "assignment-11-f5d5e.firebaseapp.com",
    projectId: "assignment-11-f5d5e",
    storageBucket: "assignment-11-f5d5e.appspot.com",
    messagingSenderId: "57239456130",
    appId: "1:57239456130:web:b6405d7053d0131d38679b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
