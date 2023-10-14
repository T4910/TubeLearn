import Playlist from './Playlist/Playlist';
import Buttons from './buttons'
import Description from './description'
import Video from './video'
import Link from 'next/link'


const Course = async ({params, searchParams}) => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
  const data = await res.json()
  const originalURL = searchParams.org

  // if ivalid vide show no result 

  console.log(data.items[0].snippet.categoryId)
  const videometa = {
    link: `https://www.youtube.com/embed/${params.id}`,
    title: data.items[0].snippet.title,
    description: data.items[0].snippet.description
  }


  return (
    <div className='flex flex-col gap-7'>
      <div className='flex lg:flex-row justify-around gap-12'>
        <div className='tubelearn__video-container flex flex-col rounded-lg'>
          <Video vid={videometa}/>
          <Buttons videoID={params.id} orgURL={originalURL}/>
          <Description vid={videometa}/>
        </div>
        <div className='rounded-lg p-2 px-4 bg-lighterGrey flex-grow max-h-full'>
          <h2 className='font-inter font-medium py-2 text-purpleDark'>Course Playlist</h2>
          <Playlist vidID={originalURL} categoryID={data.items[0].snippet.categoryId}/>
        </div>
      </div>
    </div>       
  )
}

export default Course