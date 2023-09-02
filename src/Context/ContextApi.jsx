import React, {createContext, useContext} from "react";

const AppProvider = createContext()

const ContextApi = ({children}) => {
  return (
    <AppProvider.Provider value="red">
        {children} 
    </AppProvider.Provider>
  )
}

const useContextApi = ()=>useContext(AppProvider)
export { ContextApi,useContextApi}