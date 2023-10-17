import Header from "../Components/Header"
import RecentVideos from "./recentvids"

const Recent = () => {
    return (
        <div className='px-8'>
            <Header style='text-lg'>Recent</Header>
            <RecentVideos />
        </div>
    )
}

export default Recent