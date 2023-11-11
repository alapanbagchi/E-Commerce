'use client'
import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { CreateContestAction } from "./CreateContestAction"
import { ContestWithRelations } from "../../../../prisma/generated/zod"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export const AboutCompanyForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const form = useFormContext()
    const { toast } = useToast()
    const onSubmit = async () => {
        const isValid = await form.trigger(fields, { shouldFocus: true })
        if (isValid) {
            setSubmitting(true)
            const res = await CreateContestAction(form.getValues() as ContestWithRelations)
            setSubmitting(false)
            if(res.success && res.data) router.push(`/contests/${res.data.id}`)
            else toast({ title: "Something went wrong", variant: "destructive" })
        }
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Tell us a little about your company
            </Typography>
            <Form {...form}>
                <form onSubmit={() => { }} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="company_logo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Logo*</FormLabel>
                                <FormControl>
                                    <Input type="file" accept="image/*" className="w-full p-2" placeholder="Ex. Joridiro" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex. Joridiro" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="target_audience"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Link?</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex. https://www.joridiro.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company_description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>About your company</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Ex. We solve the egg and chicken problem" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        showSubmitButton && (
                            <Button onClick={onSubmit} disabled={submitting} type="button">
                                <Loader2 className={submitting ? "w-4 h-4 mr-2 animate-spin transition-all" : "hidden"} />
                                Finish
                            </Button>
                        )
                    }
                </form>
            </Form>
        </div>
    )


}