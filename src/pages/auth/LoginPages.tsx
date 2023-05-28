import React from "react";
import { Helmet } from "react-helmet-async";
import Login from "../../sections/auth/Login";
import { useAuthContext } from "src/auth/useAuthContext";
const LoginPages = () => {
  const { isAuthenticated } = useAuthContext();

  console.log("isAuthenticated", isAuthenticated);

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
