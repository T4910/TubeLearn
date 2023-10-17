import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import RecentVideo from './singlerecentvideo'


const RecentVideos = async () => {
    let err;
    const session = await getServerSession(authOptions)
    const ID = session.user.id

    const prisma = new PrismaClient()

    let checkEntry;
    try {
        checkEntry = await prisma.recent.findMany({ where: { userId: ID } })  
    } catch (error) {
        err = true
        checkEntry = []
    }
  
    prisma.$disconnect()

    return (
        <div className="flex flex-nowrap overflow-x-auto gap-8">
            { err ? 'check your internet connection' :
                checkEntry.length == 0 ? 'Empty' : 
                (checkEntry.map(({videoId}) => <RecentVideo key={videoId} id={videoId}/>))
            }
        </div>
    )
}

export default RecentVideos