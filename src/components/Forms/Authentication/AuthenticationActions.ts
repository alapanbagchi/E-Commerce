'use server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
type SignUpAction = {
    fullName: string
    email: string
    password: string
}

export const UserExists = async (email: string) => {
    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (userExists) return true
        return false
    } catch (err: any) {
        return false
    }
}

export const SignUpAction = async (req: SignUpAction) => {
    try {
        const hashedPassword = await bcrypt.hash(req.password, 12)
        await prisma.user.create({
            data: {
                fullName: req.fullName,
                email: req.email,
                password: hashedPassword,
            }
        })
        return {
            status: 200,
            message: 'User created successfully'
        }
    } catch (err: any) {
        return {
            status: 400,
            message: err.message
        }
    }
}