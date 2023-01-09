import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    toggleLoader: state => {
      return !state;
    },
  },
});

export default loaderSlice.reducer;

export const { toggleLoader } = loaderSlice.actions;
