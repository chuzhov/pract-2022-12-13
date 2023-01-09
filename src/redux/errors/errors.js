import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    handleError: (state, { payload }) => {
      return payload;
    },
  },
});

export default errorsSlice.reducer;

export const { handleError } = errorsSlice.actions;
