import { handleError } from 'redux/errors/errors';
import { toggleLoader } from 'redux/loader/loader';
import { getImages } from './imagesReducer';

export const getImagesOperation = () => {
  return async dispatch => {
    dispatch(toggleLoader());
    dispatch(handleError(null));
    const data = await fetch(
      'https://pixabay.com/api/?key=31408282-c2e36d8dbb4ab0017da4fad76&q=yellow+flowers&image_type=photo'
    )
      .then(data => data.json())
      .then(data => dispatch(getImages(data.hits)))
      .catch(error => {
        dispatch(handleError(error.message));
      })
      .finally(() => dispatch(toggleLoader()));
  };
};

// const summ = a => b => c => {};
// summ(a)(b);
