'use client'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';

const codes = {
    'oidjfx': 'Server Error',
    '0934ds': 'Invalid input',
    '4ijoam': 'Invalid Password',
    'j93449': 'Email already used',
    'z38cew': 'Username already used',
    '07jsds': 'Invalid Email or Password'
}

export default function Flash({flash}) {
    const [show, setShow] = useState(undefined) // undefined - on; null - off
    console.log('flash:', flash, show)


    return (
        <div className={`${ codes[flash] == show ? 'hidden' : ''} text-white bg-orangeDark opacity-50 p-4 py-2 mb-4 rounded-lg flex justify-between`}>
            <div>{ codes[flash] || null }</div>
            <button onClick={() => setShow(null)}>      
                <FaTimes />
            </button>
        </div>
    )
}
