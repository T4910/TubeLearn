import React from 'react'
import { Link } from 'react-router-dom'

export const SingleCouse = ({title,description,link, _id}) => {
  return (
    <Link className='flex items-start space-x-5' to={`/courses/${_id.$oid}`}>
        <iframe className="rounded-lg" src={link}></iframe>
        <div className='flex items-start flex-col max-w-[800px]'>
            <h1 className='font-inter text-purpleDark'>{title}</h1>
            <p className='text-lightGrey font-sans'>{description}</p>
        </div>
    </Link>
  )
}
