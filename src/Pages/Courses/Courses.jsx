import {SingleCouse} from "../../Components/SingleCouse"
import { Loader } from '../../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectCourses,selectError,selectStatus, getCourses } from '../../features/courses/coursesSlice'
import { loadStatus } from '../../utils/baseUrl'
import {Error} from "../../Components/Error"
import { useEffect } from "react"

const Courses = () => {
  const dispatch = useDispatch()
  const courses = useSelector(selectCourses)
  const error = useSelector(selectError)
  const status = useSelector(selectStatus)
  const renderedCourses = courses.map((video, index)=><SingleCouse key={index} {...video} id={index}/>)
  useEffect(()=>{
    if(status === loadStatus.IDLE){
      dispatch(getCourses())
    }
  },[dispatch, status])
  let content
  if(status === loadStatus.SUCCESSFUL){
    content = renderedCourses
  }else if (status === loadStatus.FAILED){
    content = <Error state={'danger'} msg={error} show={true}/>
  }else{
    content = <Loader/>

  }
  return (
    <>
    {content}
    </>
  )
}

export default Courses