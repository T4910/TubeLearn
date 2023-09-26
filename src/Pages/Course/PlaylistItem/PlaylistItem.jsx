import { useDispatch } from "react-redux"
import "./PlaylistItem.css"
import { setCurrent } from "../../../features/videos/videoSlice";

export default function PlaylistItem ({index,length,thumbnail,title}) {
    const  time_converter = (time) => {
        let sec = time % 60
        let min = Math.floor(time / 60)
        if(sec < 10){
            sec = `0${sec}`
        }
        return  `${min}:${sec}`
    }
    const dispatch = useDispatch();
    return (
        <div className="tubelearn__video__playlist--item flex mb-4 bg-white rounded-lg p-2 w-full" 
            onClick={() => {
                dispatch(setCurrent(index));
            }}>
            <img src={thumbnail} alt={title} className="rounded w-full max-w-[100px] max-h-[60px]"/>
            <div className="tubelearn__video__playlist--item__info ml-2">
                <h3 className="tubelearn__video__playlist--item__info__title font-inter text-sm font-light text-purpleDark">{title}</h3>
                <span className="tubelearn__video__playlist--item__info__time text-xs text-orangeDark">{time_converter(length)}</span>
            </div>
        </div>
    )
}