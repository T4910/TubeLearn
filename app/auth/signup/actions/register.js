'use server'
import { PrismaClient } from '@prisma/client'
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function createUser(username, email, password){
    try{
        let user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: await hash(password, 10),
            }
        })

        console.log(user)
        return {
            success: user ? true : false, 
            err: user ? '' : 'unknown',
            user: {email: email, password: password}
        }

    } catch (e) {
        return {sucess: false, err: e}
    }

}

export default async function register(state, form){

    const username = form.get('username')
    const email = form.get('email')
    const password = form.get('password')

    const results = await createUser(username, email, password)

    console.log(results)
    return { message: 'l' }
}
