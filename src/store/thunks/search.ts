import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const search = createAsyncThunk(
  'search/search',
  async (searchValue: string) => {
    const res = await axios.post('https://example.com', { searchValue });
    return res.data;
  }
);
