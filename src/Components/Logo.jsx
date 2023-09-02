import React from 'react'
import icon from "../assets/icon.svg"

export const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
        <img src={icon} alt="logo"/>
        <p className='font-semibold text-purpleDark'>TubeLearn</p>
    </div>
  )
}
