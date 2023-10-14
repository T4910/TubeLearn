'use server'
import { PrismaClient } from '@prisma/client'
import { hash } from "bcryptjs"

export default async function register(state, form){
    const prisma = new PrismaClient()

    const username = form.get('username')
    const email = form.get('email')
    const password = form.get('password')

    console.log('REgister...', user)

    try{
        let user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: await hash(password, 10),
            }
        })

        return { message: 'ok' }
    } catch(e) {

        return { message: { err: e }}

    }


}
