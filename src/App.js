import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ForgotPassword2 from "./Pages/ForgotPassword/ForgotPassword2";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//^ Note, firebase API key is OK to share, its used only to recognize your app
const firebaseConfig = {
  apiKey: "AIzaSyDgrOgukT6wjoioWX7wgVi9XzNlvp3FGqg",
  authDomain: "fir-login-test-aabe2.firebaseapp.com",
  projectId: "fir-login-test-aabe2",
  storageBucket: "fir-login-test-aabe2.appspot.com",
  messagingSenderId: "62869379875",
  appId: "1:62869379875:web:b72e001bc4334d8eb58a96",
  measurementId: "G-7671NWF102",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Landing />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-password-2' element={<ForgotPassword2 />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
