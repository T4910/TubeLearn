import Image from 'next/image'
import Nav from './shared/Nav'
import Search from './shared/Search'


export default function Home(){
  return (
    <div className='w-full px-10 bg-lighterGrey h-screen'>
      <Nav noSearch={true} />
      <div className='flex items-start justify-around'>
        <div className='max-w-[600px] mt-12 flex flex-col space-y-8'>
          <button className='cursor-auto w-max bg-white p-2 rounded-lg text-orangeDark'>Never Stop Learning</button>
          <h1 className='font-paytone text-6xl text-purpleDark'>Grow up your skills by online courses with TubeLearn</h1>
          <p className='text-sans font-normal'>TubeLearn is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
          <Search />
        </div>
        <div>
          <Image src="/assets/Image.svg" alt="intro student" width={600} height={650}/>
        </div>
      </div>
    </div>
  )
}
