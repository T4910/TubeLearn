import React from 'react'
import { useContextApi } from './Context/ContextApi'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Landing,Course,Courses,Register,} from "./Pages"

export const Router = () => {
  const value = useContextApi()
  console.log(value)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/courses' element={<Courses/>}>
        <Route path=':courseId' element={<Course/>}/>
      </Route>
      <Route path='/auth/login' element={<Register/>}/>
      <Route path='/auth/signup' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

