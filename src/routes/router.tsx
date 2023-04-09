import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import RecoverPassword from "../pages/Login/RecoverPassword";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
    </Routes>
  );
};

export default Router;
