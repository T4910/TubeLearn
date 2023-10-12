import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./Playlist.css"
// import { Loader } from "../../../../../../app/Components/Loader";

export default function Playlist () { 
    // const {courseId} = useParams()
    // const {getPlaylist,setDanger} = useContextApi()
    // const [loading,setLoading] = useState(true)
    const videos = [
      {
        link: "https://www.youtube.com/embed/gUYBFDPZ5qk?si=58CEE_3triY1Lbag",
        title: "I built a $5 chat app with Pocketbase & Svelte. Will it scale?",
        description: "Learn how build a fullstack realtime chat app with Svelte and Pocketbase, then deploy it to a Linux server for just $5. Let's find out if the Spock stack can scale..."
      },
      {
        link: "https://www.youtube.com/embed/gUYBFDPZ5qk?si=58CEE_3triY1Lbag",
        title: "I built a $5 chat app with Pocketbase & Svelte. Will it scale?",
        description: "Learn how build a fullstack realtime chat app with Svelte and Pocketbase, then deploy it to a Linux server for just $5. Let's find out if the Spock stack can scale..."
      },
      {
        link: "https://www.youtube.com/embed/gUYBFDPZ5qk?si=58CEE_3triY1Lbag",
        title: "I built a $5 chat app with Pocketbase & Svelte. Will it scale?",
        description: "Learn how build a fullstack realtime chat app with Svelte and Pocketbase, then deploy it to a Linux server for just $5. Let's find out if the Spock stack can scale..."
      }
    ]
    // useEffect(()=>{
    //     getPlaylist(courseId).then(({data})=>{
    //       setVideos(data.video_links)
    //     }).catch((error)=>setDanger(error)).finally(()=>setLoading(false))
    //   },[])
    //   if (loading){
    //     return <Loader/>
    //   }
    return (
        <div className="tubelearn__playlist ml-2  overflow-auto w-96">
            {
                videos.map((video, index)=><PlaylistItem 
                key={index}
                img="https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg"
                title="None"
                time="1:57"
                video={video.link}
            />)
            }
            
        </div>
    )
}