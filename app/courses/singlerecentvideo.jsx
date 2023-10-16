import Image from 'next/image'
import Link from 'next/link'

const Singlerecentvideo = async ({id}) => {
    const data = await youtubeInfo(id)

    return (
        <Link href={`/courses/${id}?org=${id}`}>
            <Image src={data.link} width={300} height={100}/>
            <p>{data.title}</p>
        </Link>
    )
}

async function youtubeInfo(ID){   
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=contentDetails&part=snippet&id=${ID}`)
    const data = await res.json()

    return {
        title: data.items[0].snippet.title,
        description: data.items[0].snippet.description,
        link: data.items[0].snippet.thumbnails.default.url,
    }
}

export default Singlerecentvideo