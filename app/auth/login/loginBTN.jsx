'use client'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


const LoginBTN = () => {
    const router = useRouter()
    const { pending } = useFormStatus()

    async function login(form){
        const email = form.get('email')
        const password = form.get('password')
        
        try {
            console.log('Starting process of signing in')
            let itSignedIn = await signIn('credentials', { email: email, password: password, redirect: false })
            console.log('sign in')
            if(itSignedIn.ok) return router.push('/courses')
            else if(itSignedIn.status=='401') return router.push('?err=07jsds')
            else return router.push('?err=oidjfx')
        } catch (error) {
            console.log(error)
            return router.push('?err=oidjfx')
        }
    }

    return <button formAction={login} type="submit" className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white">{pending ? '...' : 'Login'}</button>
}

export default LoginBTN