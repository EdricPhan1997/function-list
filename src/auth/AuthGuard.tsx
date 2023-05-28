import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "src/auth/useAuthContext";
import Login from "src/sections/auth/Login";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem("accessToken");
      if (!Boolean(token)) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    };
    checkTokenValidity();

    // Check token validity every 5 seconds
    const intervalId = setInterval(checkTokenValidity, 50000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <div>{children}</div>;
};

export default AuthGuard;
