import Link from 'next/link'

const Icon = ({icon, link}) => {
    return (
        <Link href={link}>
            <div className='p-2 rounded-full text-purpleDark hover:bg-orangeDark hover:text-white'>
                {icon}
            </div>
        </Link>
    )
  }
  
export default Icon