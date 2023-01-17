import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAsGhOs7neOELOXMkfgmYFMA2kakmljww",
  authDomain: "anana-react-ignacio-lozano.firebaseapp.com",
  projectId: "anana-react-ignacio-lozano",
  storageBucket: "anana-react-ignacio-lozano.appspot.com",
  messagingSenderId: "512283984136",
  appId: "1:512283984136:web:c7dd4d904fa0c471116cbd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

