import { createSlice } from "@reduxjs/toolkit";
import type { Lecturer, LecturerState } from "../type/slices.type";
import { getListLecturer } from "../_function/lecturer";

import type { FulfilledAction, PendingAction, RejectedAction } from "../utils";

const initialState: LecturerState = {
  leturerList: [],
  dataList: [],
  editingAnswer: null,
  loading: true,
  currentRequestId: undefined,
};

const lecturerSlice = createSlice({
  name: "lecturer",
  initialState,
  reducers: {
    //
  },
  extraReducers(builder) {
    builder
      .addCase(getListLecturer.fulfilled, (state, action) => {
        state.leturerList = action.payload;
      })

      .addMatcher<PendingAction>(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith("/rejected") || action.type.endsWith("/fulfilled"),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      );
  },
});

const lecturerReducer = lecturerSlice.reducer;

export default lecturerReducer;
