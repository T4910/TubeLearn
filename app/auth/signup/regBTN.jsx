'use client'
import register from './actions/register'
import { experimental_useFormStatus as useFormStatus, experimental_useFormState as useFormState } from 'react-dom'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

const Submit = () => {
    const [state, formAction] = useFormState(register, { message: null })
    let { pending } = useFormStatus()

    useEffect(() => async function() {
        console.log('called')
        if(state?.message){
            pending = true // so that we can redirect 
            await signIn('credentials', { email: email, password: password, redirect: false })            
            console.log('redirect')
            if(state?.message == 'ok') redirect('/courses')
            if(state?.message.err) redirect(`/auth/signup?err=${state?.message.err}`)
        }
    }, [state])

    return (
        <button className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white" formAction={formAction} type="submit" disabled={pending} aria-disabled={pending}>
            {pending ? '...' : 'Sign Up'}
        </button>
    )
}

export default Submit