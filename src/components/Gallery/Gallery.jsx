import db from "db/download.json"
import css from "./Gallery.module.css"
import { GalleryItem } from "./GalleryItem";

export const Gallery = () => {
    const { hits } = db;
    const markup = hits.map(el => (
       <GalleryItem key={el.id} url={el.previewURL} tag={el.tags}/>
    )
    
    )
    return (<ul className={css.gallery}>
       {markup}
       </ul>
    )
}