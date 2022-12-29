import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducer';
import imagesReducer from "./images-slice"

export const store = configureStore({
    reducer: { auth: authReducer, 
                img: imagesReducer,}
  })