'use client'
import { useState, useContext, createContext } from "react"

export const FlashContext = createContext()

export const flashdata = () => useContext(FlashContext)

export const FlashProvider = ({ children }) => {
    const [message, setMessage] = useState(null)

    return <FlashContext.Provider value={{message, setMessage}}>{children}</FlashContext.Provider>
}