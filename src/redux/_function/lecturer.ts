import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
import axiosInstance from "../../utils/axios";
import ENDPOINT from "../../services/Endpoint";

const defaultParams = {
  PageSize: 20,
  PageIndex: 1,
};

export const getListLecturer = createAsyncThunk("cambridge/getListData", async (params: any, thunkAPI) => {
  const response: any = await axiosInstance.get(ENDPOINT.LECTURER, {
    params: isEmpty(params) ? defaultParams : params,
    signal: thunkAPI.signal,
    headers: { Authorization: `Bearer ${localStorage.accessToken}` },
  });

  const result = response && response.data;

  return result;
});
