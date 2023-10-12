// import React from "react";
// import { useDispatch } from "react-redux"
// import { setCurrent } from "../../../features/video/currentVideoSlice";
import "./PlaylistItem.css"
import Image from 'next/image'

export default function PlaylistItem ({id, title, description, link}) {
    const img = "https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg"
    // const dispatch = useDispatch();
    return (
        <div className="tubelearn__video__playlist--item flex mb-4 bg-white rounded-lg p-2 w-full" >
            <img src={img} alt={title} className="w-16" height={100} width={160}/>
            <div className="tubelearn__video__playlist--item__info ml-2">
                <h3 className="tubelearn__video__playlist--item__info__title font-inter font-light text-purpleDark">{title}</h3>
                <span className="tubelearn__video__playlist--item__info__time text-xs text-orangeDark">{2.34}</span>
            </div>
        </div>
    )
}