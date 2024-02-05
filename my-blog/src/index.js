import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISpsPDYM6-PxXRZjJij8XaNcDOyJ7Rn4",
  authDomain: "my-react-blog-1f3bf.firebaseapp.com",
  projectId: "my-react-blog-1f3bf",
  storageBucket: "my-react-blog-1f3bf.appspot.com",
  messagingSenderId: "728062359585",
  appId: "1:728062359585:web:223def2508c86a191e0b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
