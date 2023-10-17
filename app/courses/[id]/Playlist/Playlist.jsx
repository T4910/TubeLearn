import PlaylistItem from "./PlaylistItem";


export default async function Playlist ({ vidID, categoryID }) { 
    let originalURLres, originalURLdata, data;

    try{
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&videoDuration=medium&part=snippet&type=video&maxResults=12&videoCategoryId=${categoryID}`)
        data = await res.json()
    } catch (e) {
        data = []
    }
    
    if (vidID){
        try{
            originalURLres = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&part=contentDetails&id=${vidID}`)
            originalURLdata = await originalURLres.json()
        } catch (e) {
            originalURLdata = []
        }
    }

    const videos = data.items.map((vidMeta) => {
        return {
            title: vidMeta.snippet.title,
            description: vidMeta.snippet.description,
            link: vidMeta.snippet.thumbnails.default.url,
            course_id: vidMeta.id.videoId
        }
    })


    return (
        <div className="h-fit max-h-[31rem] p-2 pr-4 overflow-auto w-96 flex flex-col gap-4">
            {(originalURLdata?.items.length != 0) && <PlaylistItem 
                id={vidID}
                org={vidID}
                title={originalURLdata.items[0].snippet.title}
                img={originalURLdata.items[0].snippet.thumbnails.default.url}/>}
            {
                videos.length != 0 ?
                    videos.map((video) => <PlaylistItem 
                    key={video.course_id}
                    id={video.course_id}
                    title={video.title}
                    img={video.link}
                    org={vidID}
                    />) 
                : 'Check internet connection'
            }
        </div>
    )
}

