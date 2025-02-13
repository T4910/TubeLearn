import NextAuth from "next-auth"
import { compare } from "bcryptjs"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Crendentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.JWT_SECRET,
    session: {strategy: 'jwt'},
    callbacks:{
      async session({session, token}){
        session.user = {id: token.sub}
        return session
      }
    },
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID??"",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
      }),
      Crendentials({
        async authorize(credentials){
          let user = await prisma.user.findFirst({where: {email: credentials.email}}) || await prisma.user.findFirst({where: {username: credentials.email}})
          prisma.$disconnect()

          if(!user) return null
          let similarPassword = await compare(credentials.password, user.password)        
          
          return similarPassword ? user : null
        }
      })
    ]
}
  
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }