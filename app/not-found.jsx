import Image from "next/image"

const Error = () => {
  return (
    <div className="grid place-items-center h-full">
        <div className='font-inter font-semibold text-purpleDark flex items-center flex-col space-y-10'>
            <Image width={320} height={400} alt="error" src="/assets/error.svg"/>
            <p className='font-paytone text-purplrDark text-3xl'>Oops, page not found</p>
        </div>
    </div>
  )
}

export default Error