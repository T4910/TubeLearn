import Image from 'next/image'
import Link from 'next/link'


function iso8601ToTime(duration) {
    const iso8601Pattern = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(iso8601Pattern);
  
    if (!matches) {
      return "Invalid duration format";
    }
  
    const hours = parseInt(matches[1]) || 0;
    const minutes = parseInt(matches[2]) || 0;
    const seconds = parseInt(matches[3]) || 0;
  
    let formattedDuration = "";
  
    if (hours > 0) {
      formattedDuration += hours.toString() + ":";
    }
  
    formattedDuration += `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    return formattedDuration;
}

export default async function PlaylistItem ({id, title, img, org}) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=contentDetails&id=${id}`)
    const data = await res.json()
    const duration = data.items[0].contentDetails.duration

    return (
        <Link href={`/courses/${id}?org=${org}`} className="hover:cursor-pointer flex gap-6 bg-white rounded-lg p-2 w-full">
            <Image src={img} alt={title} height={65} width={110} className='w-[110px] h-[65px] rounded-lg'/>

            <div>
                <h3 className="font-inter font-light text-purpleDark">{title}</h3>
                <span className="text-xs text-orangeDark">{iso8601ToTime(duration)}</span>
            </div>
        </Link>
    )
}