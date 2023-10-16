'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const authBTN = ({session}) => {
    const router = useRouter()

    async function signInorOut(){
        if(session){
            await signOut()
            return router.push('/')
        }

        return router.push('/auth/login')
    }

    return (
        <button className='font-sans bg-purpleDark p-3 py-1 rounded-lg text-white' onClick={() => signInorOut()}>{session ? 'Log Out' : 'Login'}</button>
    )
}

export default authBTN