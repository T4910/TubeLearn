import SingleCourse from "../Components/SingleCourse"


const Videos = ({queryVids}) => {
    const renderVideos = queryVids

    return (
            renderVideos != 'bandwidth err' ? 
                renderVideos ? 
                    <div className="px-32 flex flex-col gap-10 mb-8">{renderVideos.map((video) => <SingleCourse {...video} key={video.course_id}/>)}</div> 
                    : ''
                : 'Check internet connection'
    )
}

export default Videos