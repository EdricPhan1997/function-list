import { createSlice } from "@reduxjs/toolkit";
import type { Lecturer, LecturerState } from "../type/slices.type";
import { upLoadSingleFile } from "../_function/uploadFile";

import type { FulfilledAction, PendingAction, RejectedAction } from "../utils";

interface UploadFileState {
  file: string;
  multifile: [];
  loading: boolean;
  currentRequestId: undefined | string;
}

const initialState: UploadFileState = {
  file: "",
  multifile: [],
  loading: false,
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
      .addCase(upLoadSingleFile.fulfilled, (state, action) => {
        state.file = action.payload;
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
