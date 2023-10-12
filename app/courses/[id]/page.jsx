// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import Playlist from './Playlist/Playlist';


const Course = ({params}) => {
  const video = {
    link: "https://www.youtube.com/embed/gUYBFDPZ5qk?si=58CEE_3triY1Lbag",
    title: "I built a $5 chat app with Pocketbase & Svelte. Will it scale?",
    description: "Learn how build a fullstack realtime chat app with Svelte and Pocketbase, then deploy it to a Linux server for just $5. Let's find out if the Spock stack can scale..."
  }


  // useEffect(()=>{
  //   getCourse(courseId).then(({data})=>{
  //     setVideo(data)
  //   }).catch((error)=>setDanger(error)).finally(()=>setLoading(false))
  // },[])


  return (
      <>
        <div className='tubelearn__video-container flex bg-lighterGrey rounded-lg'>
          <div className='tubelearn__video'>
            <iframe width="800" height="437" className="rounded-lg" src={video.link}>
            </iframe>
            <h2 className='mt-2 font-inter font-medium text-purpleDark'>{video.title}</h2>
          </div>
          <div className='tubelearn__video__playlist pl-4'>
            <h2 className='font-inter font-medium p-2 text-purpleDark'>Course Playlist</h2>
            <Playlist />
          </div>
        </div>
        <div className='w-full max-w-[800px]'>
          <h1 className='font-inter font-medium text-purpleDark'>Description</h1>
          <p className='w-full font-sans text-lightGrey'>{video.description}</p>
        </div>
      </>
        
  )
}

export default Course