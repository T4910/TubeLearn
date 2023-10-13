'use client'
import PlaylistItem from "./PlaylistItem";
// import { useVideos } from "../../../shared/context";

const Videos = () => {
    // const { videos } = useVideos()

    return (
            videos.map((video, index) => <PlaylistItem 
                key={index}
                id={video.course_id}
                title={video.course_title}
                img={video.link}
            />)
        
    )
}

export default Videos