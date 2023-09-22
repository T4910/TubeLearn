import { useDispatch } from "react-redux"
import "./PlaylistItem.css"
import { setCurrent } from "../../../features/videos/videoSlice";

export default function PlaylistItem ({index,length,thumbnail,title}) {
    
    const dispatch = useDispatch();
    return (
        <div className="tubelearn__video__playlist--item flex mb-4 bg-white rounded-lg p-2 w-full" 
            onClick={() => {
                dispatch(setCurrent(index));
            }}>
            <img src={thumbnail} alt={title} className="w-16"/>
            <div className="tubelearn__video__playlist--item__info ml-2">
                <h3 className="tubelearn__video__playlist--item__info__title font-inter font-light text-purpleDark">{title}</h3>
                <span className="tubelearn__video__playlist--item__info__time text-xs text-orangeDark">{length/60}</span>
            </div>
        </div>
    )
}