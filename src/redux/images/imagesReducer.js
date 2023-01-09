import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: [],
  reducers: {
    getImages: {
      reducer: (state, { payload }) => {
        return [...state, ...payload];
      },
      prepare: payload => {
        return { payload: payload.slice(0, 5) };
      },
    },
  },
});

const imagesReducer = imageSlice.reducer;
export default imagesReducer;

export const { getImages } = imageSlice.actions;
