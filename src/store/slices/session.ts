import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionProps, SessionError } from './types';

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
});

export default sessionSlice.reducer;
export const { handleAuthErrors } = sessionSlice.actions;
