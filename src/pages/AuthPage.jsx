import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate,useLocation } from 'react-router-dom';
import loginPageImg from "@/assets/images/loginPage/loginPage.jpg";
import LoginPage from "../components/sections/AccountAuth/Login/LoginPage";
import SignUpPage from "../components/sections/AccountAuth/SingUp/SignUpPage";
const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname.endsWith("login");

  const toggleAuth = () => {
    navigate(isLogin ? "/auth/sign-up" : "/auth/login");
  };
  return (
    <div className="flex flex-col md:flex-row  w-full min-h-screen ">
      <div className="bg-white h-screen md:w-2/4 p-4 flex flex-col justify-center items-center ">
         <Routes>
           <Route path="login" element={<LoginPage switchToSignUp={toggleAuth} />} />
          <Route path="sign-up" element={<SignUpPage switchToLogin={toggleAuth} />} />
        </Routes>
      </div>

      <div className="bg-gray-300 w-3/4">
        <div className="h-screen">
          <img
            className="w-full h-full object-cover bg-center"
            src={loginPageImg}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
