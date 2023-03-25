import React from "react";
import { Helmet } from "react-helmet-async";
import Login from "../../sections/auth/Login";
const LoginPages = () => {
  return (
    <>
      <Helmet>
        <title>Login Test</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPages;
