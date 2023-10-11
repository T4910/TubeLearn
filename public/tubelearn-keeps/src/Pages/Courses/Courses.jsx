import React, { useEffect } from 'react'
import { setVideos, setIsLoading } from '../../features/video/videoSlice'
import {SingleCouse} from "../../../../../app/Components/SingleCourse"
import { useSelector, useDispatch } from 'react-redux'
import { useContextApi } from '../../Context/ContextApi'
import { Loader } from '../../../../../app/Components/Loader'

const Courses = () => {
  const {getCourses,setDanger} = useContextApi()
  const dispatch = useDispatch()
  const {videos, isLoading} = useSelector((store)=>store.video)
  useEffect(()=>{
    getCourses().then(({data})=>{
      dispatch(setVideos({videos:data}))
    }).catch(
      (error)=>setDanger(error)
    ).finally(()=>dispatch(setIsLoading({isLoading:false})))
  },[])
  if(isLoading){
    return <Loader/>
  }
  return (
    <>
    {
        videos.map((video)=><SingleCouse {...video} key={video.course_id}/>)
    }
    </>
  )
}

export default Courses