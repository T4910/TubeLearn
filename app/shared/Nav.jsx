import Logo from './Logo'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex justify-between items-center w-full h-[80px]'>
        <Logo/>
        <Link href = "/auth/login" className='font-sans bg-purpleDark p-3 py-1 rounded-lg text-white'>
          login
        </Link>
    </div>
  )
}

export default Nav