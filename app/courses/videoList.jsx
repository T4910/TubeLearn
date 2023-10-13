'use client'
import SingleCourse from "../Components/SingleCourse"


const Videos = ({queryVids}) => {
    const renderVideos = queryVids

    return (
        renderVideos ? <div className="px-32 flex flex-col gap-10">{renderVideos.map((video) => <SingleCourse {...video} key={video.course_id}/>)}</div> : '404'
    )
}

export default Videos