import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesOperation } from 'redux/images/operations';
import css from './Gallery.module.css';
import { GalleryItem } from './GalleryItem';
import { store } from 'redux/store';

export const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImagesOperation());
  }, [dispatch]);
  console.log(store.getState());
  const { images: hits, errors, loader } = useSelector(state => state);

  useEffect(() => {
    if (errors) {
      alert(errors);
    }
  }, [errors]);

  const markup = hits.map(el => (
    <GalleryItem key={el.id} url={el.previewURL} tag={el.tags} />
  ));
  return loader ? 'Loading...' : <ul className={css.gallery}>{markup}</ul>;
};
