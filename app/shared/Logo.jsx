import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center space-x-2'>
        <Image src="/assets/icon.svg" alt="logo" width={25} height={30}/>
        <p className='font-semibold text-purpleDark'>TubeLearn</p>
    </Link>
  )
}

export default Logo