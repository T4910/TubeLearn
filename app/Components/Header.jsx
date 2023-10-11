import React from 'react'

export const Header = ({text,style}) => {
  return (
    <h1 className={`font-inter text-purpleDark font-medium ${style}`}>
        {text}
    </h1>
  )
}
