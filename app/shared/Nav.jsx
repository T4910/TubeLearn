import Logo from './Logo'
import Link from 'next/link'
import Search from './Search'

const Nav = ({noSearch}) => {
  return (
    <div className='flex justify-between items-center w-full h-[80px] min-h-[80px]'>
        <Logo/>
        {!noSearch && <Search nav={true}/>}
        <Link href = "/auth/login" className='font-sans bg-purpleDark p-3 py-1 rounded-lg text-white'>
          login
        </Link>
    </div>
  )
}

export default Nav