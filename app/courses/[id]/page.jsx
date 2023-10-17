import Playlist from './Playlist/Playlist';
import Buttons from './buttons'
import Description from './description'
import Video from './video'
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

const saveToDB = async (userId, videoId) => {
  const prisma = new PrismaClient()
  try {
    const checkEntry = await prisma.recent.findMany({
      where: { userId: userId, videoId: videoId }
    })

    if(checkEntry) return

    const recentEntry = await prisma.recent.create({
      data: {
        userId: userId, 
        videoId: videoId, 
      },
    });
    prisma.$disconnect()
    return recentEntry;
  } catch (error) {
    prisma.$disconnect()
    console.error('Error creating recent entry:', error);
  }
};

const Course = async ({params, searchParams}) => {
  let data, courseError; 
  const session = await getServerSession(authOptions)
  const originalURL = searchParams.org

  try {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    data = await res.json()
  } catch (e) {
    courseError = true
  }

  if(data.pageInfo.totalResults == 0) redirect('/courses')

  const videometa = {
    link: `https://www.youtube.com/embed/${params.id}`,
    title: data.items[0].snippet.title ?? 'check internet connection',
    description: data.items[0].snippet.description ?? 'check internet connection'
  }

  await saveToDB(session?.user.id, params.id)

  return (
    !courseError ?
    <div className='flex flex-col gap-7'>
      <div className='flex lg:flex-row justify-around gap-12 w-full'>
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
    : 'Check internet connection'    
  )
}

export default Course