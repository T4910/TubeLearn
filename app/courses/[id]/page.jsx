// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import Playlist from './Playlist/Playlist';


const Course = async ({params}) => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
  const data = await res.json()

  // if ivalid vide show no result 

  const video = {
    link: `https://www.youtube.com/embed/${params.id}`,
    title: data.items[0].snippet.title,
    description: data.items[0].snippet.description
  }


  return (
    <div className='flex flex-col gap-7'>
      <div className='flex lg:flex-row justify-around gap-12'>
        <div className='tubelearn__video-container flex flex-col rounded-lg'>
          <div className='tubelearn__video'>
            <iframe width="800" height="437" className="rounded-lg" src={video.link}>
            </iframe>
            <h2 className='mt-2 text-lg font-inter font-bold text-purpleDark'>{video.title}</h2>
          </div>
          <div className='w-full max-w-[800px] bg-lighterGrey mt-2 rounded-lg p-2'>
            <h1 className='font-inter font-medium text-purpleDark'>Description</h1>
            <p className='w-full font-sans text-lightGrey'>{video.description}</p>
          </div>
        </div>
        <div className='rounded-lg p-2 px-4 bg-lighterGrey flex-grow max-h-full'>
          <h2 className='font-inter font-medium py-2 text-purpleDark'>Course Playlist</h2>
          <Playlist />
        </div>
      </div>
    </div>       
  )
}

export default Course