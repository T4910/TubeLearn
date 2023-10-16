import Logo from './Logo'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import SignInorOut from './authBTN'

const Search = dynamic(() => import('./Search'))

const Nav = async ({noSearch}) => {
  let session = await getServerSession(authOptions)

  return (
    <div className='flex justify-between items-center w-full h-[80px] min-h-[80px]'>
        <Logo/>
        {!noSearch && <Search nav={true} />}
        <SignInorOut session={session}/>
    </div>
  )
}

export default Nav