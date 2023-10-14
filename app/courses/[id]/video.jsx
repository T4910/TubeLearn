const Video = ({vid}) => {
    return(
        <div className='tubelearn__video'>
            <iframe width="800" height="437" className="rounded-lg" src={vid.link}></iframe>
            <h2 className='mt-2 text-lg font-inter font-bold text-purpleDark'>{vid.title}</h2>
        </div>

    )
}

export default Video