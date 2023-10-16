'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Submit = () => {
    const router = useRouter()
    const { pending } = useFormStatus()

    async function register(data){
        const username = data.get('username')
        const email = data.get('email')
        const password = data.get('password')

        // 'oidjfx': 'Server Error',
        // '0934ds': 'Invalid input',
        // '4ijoam': 'Invalid Password',
        // 'j93449': 'Email already used',
        // 'z38cew': 'Username already used'

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; //email validation TODO: ADD verification
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


        if(!username || !email || !password) return router.push('?err=0934ds')
        if(!passwordRegex.test(password)) return router.push('?err=4ijoam')
        if(!emailRegex.test(email)) return router.push('?err=j93449')


        // check for email in database
        try{
            let res = await fetch('/api/register', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({email: email, username: username, password: password})
            })
            let isThereAcc = await res.json()
    
            if(isThereAcc.email) return router.push('?err=j93449')
            if(isThereAcc.username) return router.push('?err=z38cew')

            if(isThereAcc.userCreated) {
                console.log('start signing in...')
                await signIn('credentials', { email: email, password: password, redirect: false })
                console.log('now signed in')
                return router.push('/courses')
            } else {
                console.log('user wasnt created')
                return router.push('?err=oidjfx')
            }
        } catch (e) { return router.push('?err=oidjfx') }
    }

    return (
        <button formAction={register} aria-disabled={pending} disabled={pending} className='p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white'>
            { pending ? '...' : 'Submit' }
        </button>
    )
}

export default Submit

