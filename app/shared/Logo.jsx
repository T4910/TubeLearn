import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
        <Image src="/assets/icon.svg" alt="logo" width={25} height={30}/>
        <p className='font-semibold text-purpleDark'>TubeLearn</p>
    </div>
  )
}

export default Logo