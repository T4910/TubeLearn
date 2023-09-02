import React from 'react'
import { Nav } from '../../Components/Nav'
import intro from "../../assets/image.svg"

const Landing = () => {
  return (
    <div className='w-full px-10 bg-lighterGrey'>
      <Nav/>
      <div className='flex items-start '>
        <div className='max-w-[600px] mt-24 flex flex-col space-y-8'>
          <button className='cursor-auto w-max bg-white p-2 rounded-lg text-orangeDark'>Never Stop Learning</button>
          <h1 className='font-paytone text-6xl text-purpleDark'>Grow up your skills by online courses with TubeLearn</h1>
          <p className='text-sans font-normal'>TubeLearn is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
          <div className='rounded-lg space-x-2 bg-white w-max p-2 flex items-center'>
            <input placeholder='Search Courses' className="outline-none font-sans font-normal text-lightGrey" type="text"/>
            <input value="Search" className="cursor-pointer bg-pinkDark text-white p-3 py-1 rounded-lg" type="submit"/>
          </div>
        </div>
        <div className=''>
          <img src={intro} alt="intro student"/>
        </div>
      </div>
    </div>
  )
}

export default Landing