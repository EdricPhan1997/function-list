import { createContext, useEffect, useReducer, useCallback, useMemo, useState } from "react";
// utils
import localStorageAvailable from "../utils/localStorageAvailable";
//
import { isValidToken, setSession } from "./utils";
import { ActionMapType, AuthStateType, AuthUserType, JWTContextType } from "./types";
import { AuthService } from "../services";
import axiosInstance from "../utils/axios";

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

// Tạo ra mặc định 4 trạng thái với enum
enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

// Type payload của reducer
type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [rolePage, setRolePage] = useState({});

  const storageAvailable = localStorageAvailable(); // tra ve true hay false

  const initialize = useCallback(async () => {
    try {
      const token = storageAvailable ? localStorage.getItem("accessToken") : "";

      if (token && isValidToken(token)) {
        setSession(token);

        const response = await axiosInstance.post("/api/authenticate/GetCurrentUserLogin");

        const user = response.data;

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        setSession(null);
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      setSession(null);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (formData?: any) => {
    const response = await AuthService.login(formData);
    const { token, user } = response.data;
    setSession(token);
    dispatch({
      type: Types.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    const response = await AuthService.register({
      email,
      password,
      firstName,
      lastName,
    });
    const { token, user } = response.data;

    localStorage.setItem("token", token);

    dispatch({
      type: Types.REGISTER,
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    await AuthService.logout();
    setSession(null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "jwt",
      login,
      register,
      logout,
      setRolePage,
      rolePage,
    }),
    [state.isAuthenticated, state.isInitialized, state.user, login, logout, register, setRolePage, rolePage]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
