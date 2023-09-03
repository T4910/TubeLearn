import React, { useEffect, useState } from 'react'
import { videos } from '../../utils/dummyData'
import {SingleCouse} from "../../Components/SingleCouse"
import { useContextApi } from '../../Context/ContextApi'
import { Loader } from '../../Components/Loader'

const Courses = () => {
  const {getCourses,setDanger} = useContextApi()
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    getCourses().then(({data})=>{
      setVideos(data)
    }).catch(
      (error)=>setDanger(error)
    ).finally(()=>setLoading(false))
  },[])
  if(loading){
    return <Loader/>
  }
  return (
    <>
    {
        videos.map((video, index)=><SingleCouse {...video} id={index}/>)
    }
    </>
  )
}

export default Courses