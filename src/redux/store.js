import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './errors/errors';
import imagesReducer from './images/imagesReducer';
import loaderReducer from './loader/loader';

const customMiddleware = store => next => action => {
  console.log(store);
  console.log(action);
  next(action);
};

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    errors: errorReducer,
    loader: loaderReducer,
  },
  middleware: defaultMiddlewares => {
    return [...defaultMiddlewares(), customMiddleware];
  },
});
