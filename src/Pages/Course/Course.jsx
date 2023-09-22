import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Playlist from './Playlist/Playlist';
import { Loader } from '../../Components/Loader';
import { getVideos, selectCurrent, selectError, selectStatus, selectVideos } from '../../features/videos/videoSlice';
import { loadStatus } from '../../utils/baseUrl';
import { Error } from '../../Components/Error';

const Course = () => {
  const dispatch = useDispatch()
  const {courseId} = useParams()

  const videos = useSelector(selectVideos)
  const current = useSelector(selectCurrent)
  const error = useSelector(selectError)
  const status = useSelector(selectStatus)
  useEffect(()=>{
    if(status === loadStatus.IDLE){
      dispatch(getVideos({courseId}))
    }
  }, [status, dispatch, courseId])
  if (status === loadStatus.FAILED){
    return <Error msg={error}/>
  }
  if(status === loadStatus.IDLE || status === loadStatus.LOADING){
    return <Loader/>
  }
  return (
      <>
        <div className='tubelearn__video-container flex bg-lighterGrey rounded-lg'>
          <div className='tubelearn__video'>
            <iframe width="800" height="437" className="rounded-lg" src={videos[current].link.replace("watch?v=","embed/")}>
            </iframe>
            <h2 className='mt-2 font-inter font-medium text-purpleDark'>{videos[current].title}</h2>
          </div>
          <div className='tubelearn__video__playlist pl-4'>
            <h2 className='font-inter font-medium p-2 text-purpleDark'>Course Playlist</h2>
            <Playlist />
          </div>
        </div>
        <div className='w-full max-w-[800px]'>
          <h1 className='font-inter font-medium text-purpleDark'>Description</h1>
          <p className='w-full font-sans text-lightGrey'>{videos[current].description}</p>
        </div>
      </>
        
  )
}

export default Course