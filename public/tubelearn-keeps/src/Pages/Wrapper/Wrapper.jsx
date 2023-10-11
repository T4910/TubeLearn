import React from 'react'
import {Nav} from "../../../../../app/shared/Nav"
import { Logo } from '../../../../../app/shared/Logo';
import { IconHolder } from '../../../../../app/Components/IconHolder';
import {FaTwitter,FaInstagram,FaFacebookF,FaLinkedin} from "react-icons/fa"
import { Outlet } from 'react-router';

const currentYear = new Date().getFullYear()

const Wrapper = () => {
  
  return (
    <div className='w-full flex flex-col space-y-5 px-10'>

        <Nav/>
        <Outlet/>
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

export default Wrapper