import React from 'react'
import { SingleChoice } from './SingleChoice'
import { Header } from './Header'

export const SingleQuiz = ({title,choices, index}) => {
  return (
    <div className='flex flex-col space-y-5'>
        <div className='flex items-center space-x-2'>
        <span className='font-inter text-purpleDark'>{index + 1}.)</span>
        <h1 className='font-sans text-lightGrey'>{title}</h1>
        </div>
        
        <Header text="Choices"/>
        {
            choices.map((choice)=> <SingleChoice {...choice}/>)
        }
    </div>
  )
}
