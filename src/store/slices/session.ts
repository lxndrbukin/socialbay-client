import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionProps, SessionError } from './types';
import { auth } from '../thunks/auth';

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
      action: PayloadAction<SessionError>
    ) => {
      state.errors = { ...state.errors, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(auth.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.data = undefined;
      state.errors = action.payload as SessionError;
    });
  },
});

export default sessionSlice.reducer;
export const { handleAuthErrors } = sessionSlice.actions;
