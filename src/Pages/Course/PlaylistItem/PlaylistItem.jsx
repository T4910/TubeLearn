import React from "react";
import { useDispatch } from "react-redux"
import { setVideo, setTitle } from "../../../redux/videoSlice";
import "./PlaylistItem.css"

export default function PlaylistItem (props) {
    const dispatch = useDispatch();
    return (
        <div className="tubelearn__video__playlist--item flex mb-4 bg-white rounded-lg p-2 w-full" 
            onClick={() => {
                dispatch(setVideo(props.video));
                dispatch(setTitle(props.title));
            }}>
            <img src={props.img} alt={props.title} className="w-16"/>
            <div className="tubelearn__video__playlist--item__info ml-2">
                <h3 className="tubelearn__video__playlist--item__info__title font-inter font-light text-purpleDark">{props.title}</h3>
                <span className="tubelearn__video__playlist--item__info__time text-xs text-orangeDark">{props.time}</span>
            </div>
        </div>
    )
}