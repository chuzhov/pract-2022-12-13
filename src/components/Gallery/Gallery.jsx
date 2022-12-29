import db from "db/download.json"
import css from "./Gallery.module.css"
import { GalleryItem } from "./GalleryItem";
import axiosFetchPictures from "utils/loadPicures";
import { useEffect } from "react";
import { setImages } from "redux/images-slice";
import { useDispatch, useSelector } from "react-redux";

export const Gallery = () => {
   const dispatcher = useDispatch();
    useEffect(() => {
      
      axiosFetchPictures("cars")
      .then((hits)=> 
         dispatcher(setImages(hits)) 
      )
      
    }, [])
    
    const images = useSelector((state)=>{return state.img})

    const markup = images.map(el => (
       <GalleryItem key={el.id} url={el.previewURL} tag={el.tags}/>
    )
    
    )
    return (<ul className={css.gallery}>
       {markup}
       </ul>
    )
}