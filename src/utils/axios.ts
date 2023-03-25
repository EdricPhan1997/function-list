import axios from "axios";
// config
import { HOST_API_KEY_CAMBRIDGE } from "../config-global";

// ----------------------------------------------------------------------

// check token de add header
export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    // tokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");

    delete axios.defaults.headers.common.Authorization;
  }
};

//=======================================================================
// const axiosInstance = axios.create({ baseURL: HOST_API_KEY });
const axiosInstance = axios.create({ baseURL: HOST_API_KEY_CAMBRIDGE });

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
);

export default axiosInstance;
