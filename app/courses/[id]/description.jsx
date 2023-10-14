const Description = ({vid: video}) => {
    return(
        <div className='w-full max-w-[800px] bg-lighterGrey mt-2 rounded-lg p-2'>
            <h1 className='font-inter font-medium text-purpleDark'>Description</h1>
            <p className='w-full font-sans text-lightGrey'>{video.description}</p>
        </div>
    )
}

export default Description