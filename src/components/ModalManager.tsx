'use client'
import { useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { SignUpForm } from "./Forms/Authentication/SignUpForm"
import { SignInForm } from "./Forms/Authentication/SignInForm"

export const ModalManager = () => {
    const [modal, setModal] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const router = useRouter()
    useEffect(() => {
        setModal(searchParams.get("modal"))
    }, [searchParams.get("modal")])
    return (
        <>
            <Dialog open={modal === 'signup'} onOpenChange={() => {
                router.replace("/")
            }}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Welcome to Joridiro!</DialogTitle>
                    </DialogHeader>
                    <SignUpForm />
                </DialogContent>
            </Dialog>
            <Dialog open={modal === 'signin'} onOpenChange={() => {
                router.push("/")
            }}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Welcome back to Joridiro!</DialogTitle>
                    </DialogHeader>
                    <SignInForm />
                </DialogContent>
            </Dialog>
        </>
    )
}