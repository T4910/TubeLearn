'use client'
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

const LoginBTN = () => {
    async function login(form){
        const email = form.get('email')
        const password = form.get('password')

        await signIn('credentials', { email: email, password: password, redirect: false })
        redirect('/courses')
    }

    return <button formAction={login} type="submit" className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white">Login</button>
}

export default LoginBTN