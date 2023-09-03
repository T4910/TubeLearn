import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {FaTwitter,FaInstagram,FaFacebookF,FaLinkedin} from "react-icons/fa"

import Playlist from './Playlist/Playlist';
import {Nav} from "../../Components/Nav"
import { Logo } from '../../Components/Logo';
import { IconHolder } from './IconHolder/IconHolder';

const Courses = () => {
  const video = useSelector((state => state.video.video));
  const title = useSelector((state => state.video.title));
  const currentYear = new Date().getFullYear()
  return (
      <div className='w-full flex flex-col space-y-5 px-10'>
        <Nav/>
        <div className='tubelearn__video-container flex bg-lighterGrey rounded-lg'>
          <div className='tubelearn__video'>
            <iframe width="800" height="437" className="rounded-lg" src={video}>
            </iframe>
            <h2 className='mt-2 font-inter font-medium text-purpleDark'>{title}</h2>
          </div>
          <div className='tubelearn__video__playlist pl-4'>
            <h2 className='font-inter font-medium p-2 text-purpleDark'>Course Playlist</h2>
            <Playlist />
          </div>
        </div>
        <div className='w-full max-w-[800px]'>
          <h1 className='font-inter font-medium text-purpleDark'>Description</h1>
          <p className='w-full font-sans text-lightGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium libero molestiae voluptatem consequuntur aliquid. Nihil incidunt sint iusto cum, quam culpa quo aperiam asperiores facere doloribus molestiae est neque?</p>
        </div>
        <div className='w-full flex items-center justify-between pt-12 pb-5'>
          <Logo/>
          <p className='text-lightGrey'>@ {currentYear} TubeLearn</p>
          <div className='flex items-center space-x-2 '>
            <IconHolder>
                <FaFacebookF/>
            </IconHolder>
            <IconHolder>
                <FaInstagram/>
            </IconHolder>
            <IconHolder>
                <FaTwitter/>
            </IconHolder>
            <IconHolder>
                <FaLinkedin/>
            </IconHolder>
           
            
            
          </div>
        </div>
      </div>
  )
}

export default Courses