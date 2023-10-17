import Footer from '../shared/Footer'
import Nav from '../shared/Nav'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'


const CoursesLayout = async ({children}) => {
    const session = await getServerSession(authOptions)
    if(!session?.user.id) redirect('/auth/login')

    return (
        <div className='w-full h-full flex flex-col space-y-5 px-10'>
            <Nav />
            {children}
            <Footer />
        </div>
    )
  }

export default CoursesLayout