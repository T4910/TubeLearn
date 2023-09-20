import React from 'react'
import error from "../../assets/error.svg"

const Error = () => {
  return (
    <div className='font-inter font-semibold text-purpleDark flex items-center flex-col space-y-10'>
    <img className="mt-10 max-w-[400px]" alt="error" src={error}/>
    <p className='font-paytone text-purplrDark text-3xl'>
      Oops, page not found</p>
    </div>
  )
}

export default Error