import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./hooks/_user";
import { login } from "./hooks/auth";

const Authentication = () => {
  const { user, mutate, loggedOut } = useUser();
  const navigate = useNavigate();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user && !loggedOut) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, loggedOut]);

  //   console.log("user", user);

  return (
    <div>
      <button
        onClick={() => {
          login();
          mutate();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Authentication;
