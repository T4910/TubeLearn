import React from 'react'

export const ClassicInput = ({icon,type,title,iconText}) => {
  return (
    <div className="flex items-start flex-col space-y-2">
            <label>{title}</label>
            <div className="relative flex items-center">
              <img className="absolute left-[10px]" src={icon} alt={iconText}/>
              <input className="rounded-lg p-4 py-2 pl-8 border border-strokeGrey" type={type}/>
            </div>
    </div>
  )
}
