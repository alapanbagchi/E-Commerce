'use client'
import { Button } from "@/components/ui/Button"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"

const Page = () => {
  return (
    <div>
      <Button onClick={()=>signOut()}>Sign Out</Button>
    </div>
  )
}

export default Page