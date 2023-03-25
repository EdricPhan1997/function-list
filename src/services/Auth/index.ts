import { RegisterBodyData } from "src/auth/types";
import axiosInstance from "src/utils/axios"; // chua domain chinh de call api voi axios
import ENDPOINT from "../Endpoint"; // chua routes phia sau de call api
import axiosAuth from "src/utils/axiosAuth"; // domain rieng cho Login neu co

const AuthService = {
  whoAmI: () => axiosInstance.get(ENDPOINT.WHO_AM_I),
  login: (authBodyData: any) => axiosAuth.post(ENDPOINT.LOGIN, authBodyData),
  logout: () => axiosInstance.post(ENDPOINT.LOGOUT),
  register: (registerBodyData: RegisterBodyData) => axiosInstance.post(ENDPOINT.REGISTER, registerBodyData),
};
export default AuthService;
