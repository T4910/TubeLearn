import SingleCourse from "../Components/SingleCourse"
import Image from 'next/image'


const Videos = ({queryVids}) => {
    const renderVideos = queryVids

    return (
            renderVideos ? <div className="px-32 flex flex-col gap-10 mb-8">{renderVideos.map((video) => <SingleCourse {...video} key={video.course_id}/>)}</div> : ''
    )
}

export default Videos