import { configureStore } from '@reduxjs/toolkit';
import session from './slices/session';
import search from './slices/search';

export const store = configureStore({
  reducer: {
    session,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices/session';
export * from './slices/search';
export * from './thunks/auth';
export * from './thunks/search';
