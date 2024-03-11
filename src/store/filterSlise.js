import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlise.reducer;
export const { changeFilter } = filterSlise.actions;
