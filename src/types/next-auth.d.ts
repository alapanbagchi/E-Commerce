import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      fullName: string,
      email: string,
      role: string,
      avatar: string,
    } & DefaultUser
  }
  interface User extends DefaultUser {
    fullName: string,
    email: string,
    role: string,
    avatar: string,
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    fullName: string,
    email: string,
    role: string,
    avatar: string,
  }
}