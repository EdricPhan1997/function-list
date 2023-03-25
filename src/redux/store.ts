import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import lecturerReducer from "./slice/lecturer";

export const store = configureStore({
  reducer: {
    // xuat hien trong redux devtool va hien trong tree state cua redux
    lecturer: lecturerReducer,
  },
});

// 2 export phuc vu cho van de typescript
// Lay RootState va Appdispatch tu store cua chung ta
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// cau hinh voi typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
