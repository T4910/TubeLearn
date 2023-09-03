import React, { useState,useEffect } from "react";

import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./Playlist.css"
import { useParams } from "react-router";
import { useContextApi } from "../../../Context/ContextApi";
import { Loader } from "../../../Components/Loader";

export default function Playlist () { 
    const {courseId} = useParams()
    const {getPlaylist,setDanger} = useContextApi()
    const [loading,setLoading] = useState(true)
    const [videos,setVideos] = useState()
    useEffect(()=>{
        getPlaylist(courseId).then(({data})=>{
          setVideos(data.video_links)
        }).catch((error)=>setDanger(error)).finally(()=>setLoading(false))
      },[])
      if (loading){
        return <Loader/>
      }
    return (
        <div className="tubelearn__playlist ml-2  overflow-auto w-96">
            {
                videos.map((video)=><PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg"
                title="None"
                time="1:57"
                video={video.link}
            />)
            }
            
        </div>
    )
}