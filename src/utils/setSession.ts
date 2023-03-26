import axiosInstance from "./axios";

// check token de add header
export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    // tokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
