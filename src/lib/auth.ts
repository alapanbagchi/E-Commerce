import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import prisma from "@/lib/prisma";
import { RequestInternal } from "next-auth";

export const authOptions: NextAuthOptions = {
    callbacks: {
        async session({ session, token, user }) {
            session.user.email = token.email as string
            session.user.avatar = token.avatar as string
            session.user.fullName = token.fullName as string
            session.user.role = token.role as string
            return session
        },
        async jwt({ token, user, account, profile }) {
            if (user) {
                token.email = user.email
                token.avatar = user.avatar
                token.fullName = user.fullName
                token.role = user.role
            }
            return token
        }
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) {
                if (!credentials) return null
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                    }
                })
                if (!user) return null
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
                if (isPasswordValid) return {
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar || "",
                }
                return null
            }
        })
    ],
}

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, authOptions)
}