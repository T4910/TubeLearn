import React, { useEffect } from 'react'
import { setVideos, setIsLoading } from '../../features/video/videoSlice'
import SingleCourse from "../../../../../app/Components/SingleCourse"
import { useSelector, useDispatch } from 'react-redux'
import { useContextApi } from '../../Context/ContextApi'

const Courses = () => {
  const { getCourses, setDanger } = useContextApi()

  const dispatch = useDispatch()

  const {videos, isLoading} = useSelector((store) => store.video)

  useEffect(()=>{
    getCourses().then(({data})=>{
      dispatch(setVideos({videos: data}))
    }).catch(
      (error)=>setDanger(error)
    ).finally(()=>dispatch(setIsLoading({isLoading:false})))
  },[])


  return (
    <> { videos.map((video) => <SingleCourse {...video} key={video.course_id}/>) } </>
  )
}

export default Courses