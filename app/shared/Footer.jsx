import Logo from "./Logo"
import IconHolder from "./Icon"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import Link from 'next/link'


const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
      <div>
        <div className='w-full flex items-center justify-between pt-12 pb-2'>
          <Logo/>
          <p className='text-lightGrey'>@ {currentYear} TubeLearn</p>
          <div className='flex items-center space-x-2 '>
            <IconHolder icon={<FaInstagram/>} link="#"/>
            <IconHolder icon={<FaLinkedin/>} link="#"/>            
          </div>
        </div>
        <div>
          <p className="text-center text-lightGrey text-xs">Original source: <Link className="text-orangeDark underline" href="github.com/TubeLearn">TubeLearn Repo</Link> </p>
        </div>
      </div>
    )
}

export default Footer

// <IconHolder>
// <FaFacebookF/>
// </IconHolder>
// <IconHolder>
// <FaInstagram/>
// </IconHolder>
// <IconHolder>
// <FaTwitter/>
// </IconHolder>
// <IconHolder>
// <FaLinkedin/>
// </IconHolder>
