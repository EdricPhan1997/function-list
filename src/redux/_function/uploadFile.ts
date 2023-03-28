import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
import axiosInstance from "../../utils/axios";
import ENDPOINT from "../../services/Endpoint";

export const upLoadSingleFile = createAsyncThunk("upload/file", async (body: any, thunkAPI) => {
  const response = await axiosInstance.post(ENDPOINT.FILE, body, {
    signal: thunkAPI.signal,
  });
  return response.data.fileUrl;
});

export const upLoadMultiFile = createAsyncThunk("upload/files", async (body: any, thunkAPI) => {
  const response = await axiosInstance.post(ENDPOINT.MULTIFILE, body, {
    signal: thunkAPI.signal,
  });
  return response;
});
