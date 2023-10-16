import Footer from '../shared/Footer'
import Nav from '../shared/Nav'


const CoursesLayout = ({children}) => {
    return (
        <div className='w-full h-full flex flex-col space-y-5 px-10'>
            <Nav />
            {children}
            <Footer />
        </div>
    )
  }

export default CoursesLayout