// import React, { useEffect } from 'react'
// import { setVideos, setIsLoading } from '../../features/video/videoSlice'
import SingleCourse from "../Components/SingleCourse"
// import { useSelector, useDispatch } from 'react-redux'
// import { useContextApi } from '../../Context/ContextApi'

const Courses = () => {
    function truncateSentence(sentence, maxWords) {
        const words = sentence.split(' ');
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(' ') + ' ...';
        }
        return sentence;
      }
      
      
    let videos = [
        {
            course_title:'Tobi', 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
            link:"https://youtu.be/gUYBFDPZ5qk?si=WuoV6nY6YfvN2pEt", 
            course_id:'1'
        },
        {
            course_title:'Tobi', 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
            link:"https://youtu.be/gUYBFDPZ5qk?si=WuoV6nY6YfvN2pEt", 
            course_id:'1'
        }
    ]


    return (
        <> { videos.map((video) => {
                let edittedMeta = {...video, description: truncateSentence(video.description, 35)}
                return <SingleCourse {...edittedMeta} key={video.course_id}/>
            }) } </>
    )
}

export default Courses