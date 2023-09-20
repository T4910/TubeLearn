import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Landing,Course,Courses,Register,Wrapper,Quiz,GlobalWrapper,Error} from "./Pages"

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GlobalWrapper/>}>
        <Route index element={<Landing/>}/>
      <Route path='/courses' element={<Wrapper/>}>
        <Route index element={<Courses/>}/>
        <Route path=':courseId' element={<Course/>}/>
        <Route path=':courseId/quiz' element={<Quiz/>}/>
      </Route>
      <Route path='/auth/login' element={<Register/>}/>
      <Route path='/auth/signup' element={<Register/>}/>
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

