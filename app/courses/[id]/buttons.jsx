import Link from 'next/link'

const Buttons = ({videoID, orgURL}) => {
    return (
        <div className="flex justify- gap-8 my-2">
            <Link className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-orangeDark' href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank">Visit</Link>
            <Link className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-lightGrey' href={`/courses/`}>Courses</Link>
            <Link className='py-2 text-center text-purpleDark rounded-lg w-6/12 inline-block bg-pinkDark' href={`/courses/${videoID}/quiz?org=${orgURL}`}>Quiz</Link>
        </div>
    )
}

export default Buttons