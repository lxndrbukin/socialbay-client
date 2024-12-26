import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchProps } from './types';

const initialState: SearchProps = {
  searchValue: '',
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (
      state: SearchProps,
      action: PayloadAction<string>
    ): void => {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchValue } = searchSlice.actions;
