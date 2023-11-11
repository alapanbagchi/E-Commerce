'use client'
import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string(),
})

export const SignInForm = () => {
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    useEffect(() => {
        form.watch((value, { name, type }) => {
            if (!invalidCredentials && type === "change") setInvalidCredentials(false)
        });
    }, [form.watch])
    const onSubmit = async () => {
        try {
            const res = await signIn("credentials", {
                email: form.getValues("email"),
                password: form.getValues("password"),
                redirect: false,
            })
            if (!res?.ok) return setInvalidCredentials(true)
            router.replace(pathname)
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Form {...form}>
            {invalidCredentials && (
                <Typography variant="p_small" className="py-2 px-4 bg-destructive/20 rounded-sm text-destructive">
                    Invalid email or password
                </Typography>
            )}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                                <Input placeholder="Ex. johndoe@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex justify-between">
                                <p>Password*</p>
                                <Link href="/forgot-password">
                                    Forgot your password?
                                </Link>
                            </FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={form.formState.isSubmitting} type="submit">
                    <Loader2 className={form.formState.isSubmitting ? "w-4 h-4 mr-2 animate-spin transition-all" : "hidden"} />
                    Log In
                </Button>
            </form>
        </Form>
    )
}