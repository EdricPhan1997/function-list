// ----------------------------------------------------------------------

import { Dispatch, SetStateAction } from "react";

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
};

export type LoginBodyData = {
  Username: string;
  password: string;
};

export type RegisterBodyData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

// ----------------------------------------------------------------------

export type JWTContextType = {
  method: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
  login: (formData: any) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  setRolePage: Dispatch<SetStateAction<{}>>;
  rolePage: any;
};
