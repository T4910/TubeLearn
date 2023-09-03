import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Playlist from './Playlist/Playlist';

const Courses = () => {
  const video = useSelector((state => state.video.video));
  const title = useSelector((state => state.video.title));
  return (
      <div className='ml-60'>
        <div className='tubelearn__video-container flex ml-auto'>
          <div className='tubelearn__video'>
            <iframe width="800" height="437" src={video}>
            </iframe>
            <h2>{title}</h2>
          </div>
          <div className='tubelearn__video__playlist'>
            <h2>Course Playlist</h2>
            <Playlist />
          </div>
        </div>
      </div>
  )
}

export default Courses