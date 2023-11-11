'use client'
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/Checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { SignUpAction, UserExists } from "./AuthenticationActions"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { usePathname, useRouter } from "next/navigation"

const SignUpFormSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms and conditions",
        path: ["terms"],
    }),
}).superRefine(async ({ email, confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ["confirmPassword"],
        });
    }
    const user = await UserExists(email)
    console.log(user)
    if (user) {
        ctx.addIssue({
            code: "custom",
            message: "This email is already in use",
            path: ["email"],
        });
    }
});

export const SignUpForm = () => {
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })
    const { toast } = useToast()
    const onSubmit = async () => {
        try {
            await SignUpAction({
                fullName: form.getValues("fullName"),
                email: form.getValues("email"),
                password: form.getValues("password"),
            })
            toast({
                title: "Successfully signed up!",
            })
        } catch (err: any) {
            toast({
                title: "Error signing up",
                description: err.message,
                variant: "destructive",
            })
        }
        router.replace(pathname)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                                <Input placeholder="Ex. John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                            <FormLabel>Password*</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password*</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Confirm your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-3 py-2">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="!mt-0">I agree to the Terms and Conditions of Tordo</FormLabel>
                        </FormItem>
                    )}
                />
                <Button disabled={form.formState.isSubmitting} type="submit">
                    <Loader2 className={form.formState.isSubmitting ? "w-4 h-4 mr-2 animate-spin transition-all" : "hidden"} />
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}