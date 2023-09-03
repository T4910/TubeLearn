import React from 'react'
import { useContextApi } from '../../Context/ContextApi'
import { Outlet } from 'react-router'
import { Error } from '../../Components/Error'

const GlobalWrapper = () => {
    const {error} = useContextApi()
  return (
    <>
        <Error {...error} />
        <Outlet/>
    </>
  )
}

export default GlobalWrapper