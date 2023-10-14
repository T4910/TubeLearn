import Link from "next/link"
import Image from "next/image"

const SingleCourse = ({course_title, description, link, course_id}) => {
  return (
    <Link className='flex items-start justify-center gap-8 h-40' href={`/courses/${course_id}?org=${course_id}`}>
        <Image className="rounded-lg h-full w-1/3" src={link} width={250} height={60}/>
        <div className='flex items-start flex-col max-w-[800px] h-full w-2/3'>
            <h1 className='font-inter font-medium text-xl text-purpleDark'>{course_title}</h1>
            <p className='text-lightGrey font-sans overflow-hidden mt-2 mb-1'>{description}</p>
        </div>
    </Link>
  )
}

export default SingleCourse

{/* <div className='tubelearn__video__playlist pl-4'>
            <h2 className='font-inter font-medium p-2 text-purpleDark'>Course Playlist</h2>
            <Playlist />
          </div> */}