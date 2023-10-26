import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ForgotPassword2 from "./Pages/ForgotPassword/ForgotPassword2";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Signup from "./Pages/Signup/Signup";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-password-2' element={<ForgotPassword2 />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
