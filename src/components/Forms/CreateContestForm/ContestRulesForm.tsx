'use client'

import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { Grip } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"

export const ContestRulesForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        if (form.getValues("rules").slice(-1)[0] !== "") {
            form.setValue("rules", [...form.getValues("rules"), ""])
        }
        if (form.getValues("rules").slice(-1)[0] === "" && form.getValues("rules").slice(-2)[0] === "" && form.getValues("rules").length > 1) {
            form.setValue("rules", form.getValues("rules").slice(0, -1))
        }
    }, [form.watch()])
    const onSubmit = async () => {
        const isValid = await form.trigger(fields, { shouldFocus: true })
        if (isValid) {
            router.push(pathName + "?step=5" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`, { scroll: false })
        }
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Contest Rules
            </Typography>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} className="space-y-4">
                    {
                        form.getValues("rules").map((rule: unknown, index: number) => (
                            <FormField
                                key={index}
                                control={form.control}
                                name={`rules[${index}]`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl className="flex items-center">
                                            <Input
                                                placeholder="Enter the rule for your contest" {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))
                    }
                    {
                        showSubmitButton && (
                            <Button onClick={onSubmit} type="button">
                                Continue
                            </Button>
                        )
                    }
                </form>
            </Form>
        </div>
    )
}