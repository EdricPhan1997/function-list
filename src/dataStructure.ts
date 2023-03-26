import { RecoilState, useRecoilValue } from "recoil";
import { atom } from "recoil";

export interface Todo {
  id: string;
  bodyText: string;
  completed: boolean;
}

export type TodoListType = Todo[];

export interface AppState {
  todoList: TodoListType;
}

export enum LocalStorageKey {
  APP_STATE = "accessToken",
}

export const recoilState = atom({
  default: "",
  key: "initialAppState",
});
