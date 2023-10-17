'use client'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const authBTN = ({session}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(session ? 'Log Out' : 'Login')

    async function signInorOut(){
        if(session){
            await signOut()
            return router.push('/')
        }

        return router.push('/auth/login')
    }

    return (
        <button className='font-sans bg-purpleDark p-3 py-1 rounded-lg text-white' onClick={() => {
            setLoading('loadSpin')
            signInorOut()
        }}>
            {loading}
        </button>
    )
}

export default authBTN