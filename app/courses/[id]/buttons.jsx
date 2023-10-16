import Link from 'next/link'

const Buttons = ({videoID, orgURL}) => {
    return (
        <div className="flex justify- gap-8 my-2">
            <Link className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-orangeDark' href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank">Visit</Link>
            <Link className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-lightGrey' href={`/courses/`}>Courses</Link>
            <div className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-pinkDark opacity-30' href={`/courses/${videoID}/quiz?org=${orgURL}`}>Quiz</div>
        </div>
    )
}

export default Buttons