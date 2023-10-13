import Header from "../Components/Header"
import Videos from "./videoList";


const Courses = async ({ searchParams }) => {
    const query = searchParams.q
    const vids = await youtubeSearch(query)    

    return ( 
        <div>
            <div className='flex flex-col gap-7'>
                <Videos queryVids={vids}/>
            </div>
            <div>
                <Header style='mt-8 pl-8 text-lg'>Recent</Header>
            </div>
        </div>
    )
}

async function youtubeSearch(query){   
    if(!query) return null

    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=5&order=rating&q=${query}`)
    const data = await res.json()

    const newVideos = data.items.map((vidMeta) => {
        return {
            course_title: vidMeta.snippet.title,
            description: vidMeta.snippet.description,
            link: vidMeta.snippet.thumbnails.default.url,
            course_id: vidMeta.id.videoId
        }
    })

    return newVideos
}


export default Courses