import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"


const RecentVideos = async () => {
    const session = await getServerSession(authOptions)
    const ID = session.user.id

    const prisma = new PrismaClient()

    const checkEntry = await prisma.recent.findMany({ where: { userId: ID } })

    console.log(checkEntry)
  
    prisma.$disconnect()

    return (
        <div>RecentVideos</div>
    )
}

export default RecentVideos