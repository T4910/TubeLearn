import React, {createContext, useContext, useState} from "react";

const AppProvider = createContext()

const ContextApi = ({children}) => {
  const [user, setUser] = useState(null)
  return (
    <AppProvider.Provider value={{user,setUser}}>
        {children} 
    </AppProvider.Provider>
  )
}

const useContextApi = ()=>useContext(AppProvider)
export { ContextApi,useContextApi}