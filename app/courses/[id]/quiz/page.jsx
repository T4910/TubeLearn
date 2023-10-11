import React from 'react'
import { SingleQuiz } from '../../../../../app/Components/SingleQuiz'
import {quizes} from "../../utils/dummyData"
import {Header} from "../../../../../app/Components/Header"

const Quiz = () => {
  return (
    <>
    <Header text="Questions and Answers"/>
    {quizes.map((quiz, index)=><SingleQuiz {...quiz} index={index}/>)

    }
    </>
  )
}

export default Quiz