import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import {reducer} from "./reducer"
import { actions, initialState } from "./actions";
import axios from "axios";

const AppProvider = createContext()

const ContextApi = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const base_url = import.meta.env.VITE_BASE_URL
  const setError = ({msg,show,state})=>{
    dispatch({
      type:actions.SET_ERROR,
      payload:{msg,show,status:state}
    })
  }
  const hideError = ()=>{
    return setTimeout(()=>setError({...state.error, show:false}),3000)
  }
  const changeError = ({msg,show,state})=>{
    setError({msg,show,state})
    hideError()
  }
  const getError = (error)=>{
    const  {data} = error?.response
    if(data?.message){
        return data.message
      }
    return "server error occurred"
  }
  const setDanger = (error)=>changeError({show:true,msg:getError(error),state:"danger"})
  const register = (type,body)=> axios.post(`${base_url}/user/${type}`,{...body})
  const getCourses = ()=> axios.get(`${base_url}/courses`)
  const getCourse = (id)=> axios.get(`${base_url}/courses/${id}`)
  const getPlaylist = (id)=> axios.get(`${base_url}/coures/${id}/video`)
  const setUser = (token)=>{
    return dispatch({
      type:actions.REGISTER_USER,
      payload:{token}
    })
  }
  return (
    <AppProvider.Provider value={{...state,register,changeError,setUser,getCourses,setDanger,getCourse,getPlaylist}}>
        {children} 
    </AppProvider.Provider>
  )
}

const useContextApi = ()=>useContext(AppProvider)
export { ContextApi,useContextApi}