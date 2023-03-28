import { RecoilState, useRecoilValue } from "recoil";
import { atom } from "recoil";
import { setSession } from "./utils/setSession";

export interface Props {
  token: string;
}

export enum LocalStorageKey {
  APP_STATE = "accessToken",
}

function LoadAppStateFromLocalStorage() {
  const stringifiedJSON: string | null = window.localStorage.getItem(LocalStorageKey.APP_STATE);

  if (typeof stringifiedJSON === "string") {
    // neu stringifiedJSON === 'string'
    const Loaded = JSON.parse(stringifiedJSON); // chuyen doi stringifiedJSON ve object
    setSession(Loaded);
    return Loaded;
  }

  return "";
}

export const recoilState = atom({
  default: LoadAppStateFromLocalStorage(),
  key: "initialAppState",
});
