import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type AuthData = {
  action: string;
  data: any;
};

export const auth = createAsyncThunk(
  'session/auth',
  async ({ action, data }: AuthData, { rejectWithValue }): Promise<any> => {
    try {
      const res = await axios.post(`/auth`, {
        action,
        data,
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);
