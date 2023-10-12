import Link from "next/link"

const SingleCourse = ({course_title, description, link, course_id}) => {
  return (
    <Link className='flex items-start justify-center gap-4 h-40' href={`/courses/${course_id}`}>
        <iframe className="rounded-lg h-full" src={link}></iframe>
        <div className='flex items-start flex-col max-w-[800px] h-full'>
            <h1 className='font-inter text-purpleDark'>{course_title}</h1>
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