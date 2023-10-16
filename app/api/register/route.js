import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"


export async function POST(req){
  const prisma = new PrismaClient()
  const data = await req.json()

  let emailresults = await prisma.user.count({where: { email: data.email }})
  let usersresults = await prisma.user.count({where: { username: data.username }})
  
  prisma.$disconnect()

  if(emailresults || usersresults) {
    return NextResponse.json({
      username: usersresults,
      email: emailresults
    })
  }

  const user = await prisma.user.create({
    data: {
      username: data.username.toLowerCase(),
      password: await hash(data.password, 10),
      email: data.email.toLowerCase()
    },
  })

  let userCreated = user ?  true : false

  prisma.$disconnect()
  return NextResponse.json({userCreated: userCreated})
};

