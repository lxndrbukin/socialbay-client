import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionProps } from './types';

const initialState: SessionProps = {
  isLoggedIn: false,
  data: undefined,
  errors: undefined,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    handleAuthErrors: (
      state: SessionProps,
      action: PayloadAction<{ [key: string]: string | undefined }>
    ) => {
      state.errors = { ...state.errors, ...action.payload };
    },
  },
});

export default sessionSlice.reducer;
export const { handleAuthErrors } = sessionSlice.actions;
