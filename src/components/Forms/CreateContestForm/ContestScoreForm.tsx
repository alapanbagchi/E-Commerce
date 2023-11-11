'use client'

import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useFormContext, useWatch } from "react-hook-form"
import { z } from "zod"


const ScoreSchema = z.object({
    id: z.string(),
    contestId: z.string(),
    points: z.coerce.number().min(1, { message: "Points must be atleast 1" }),
    count: z.coerce.number().min(1, { message: "Count must be atleast 1" }),
    measuring_unit: z.string().min(1, { message: "Measuring unit is required" }),
})

export const ContestScoreForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()
    const scoreWatcher = useWatch({
        control: form.control,
        name: "score"
    })
    useEffect(() => {
        if (form.getValues("score").length === 0) {
            form.setValue("score", [{ points: "", count: "", measuring_unit: "" }])
        }
        if ((form.getValues("score").slice(-1)[0].points || form.getValues("score").slice(-1)[0].count || form.getValues("score").slice(-1)[0].measuring_unit) && form.getValues("score").length < 10) {
            console.log("here")
            form.setValue("score", [...form.getValues("score"), { points: "", count: "", measuring_unit: "" }])
        }
        if (
            form.getValues("score").slice(-1)[0].points === "" &&
            form.getValues("score").slice(-1)[0].count === "" &&
            form.getValues("score").slice(-1)[0].measuring_unit === "" &&
            form.getValues("score").length > 1 && form.getValues("score").slice(-2)[0].points === "" &&
            form.getValues("score").slice(-2)[0].count === "" &&
            form.getValues("score").slice(-2)[0].measuring_unit === "" &&
            form.getValues("score").length < 10
        ) {
            form.setValue("score", form.getValues("score").slice(0, -1))
        }
    }, [scoreWatcher])

    const onSubmit = async () => {
        const isValid = await form.trigger(fields, { shouldFocus: true })
        if (isValid) {
            router.push(pathName + "?step=4" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`, { scroll: false })
        }
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Contest Score Details
            </Typography>
            <Form {...form}>
                <form onSubmit={() => { }} className="space-y-4">
                    {
                        form.getValues("score").map((score: unknown, index: number) => (
                            <div key={index} className="flex gap-3 items-end p-3 border-2 rounded-lg">
                                <Typography variant="p" className="mb-[8px] flex">
                                    Participants get
                                </Typography>
                                <FormField
                                    control={form.control}
                                    name={`score[${index}].points`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input min={1} type="number" className="p-0 border-b-2 border-t-0 border-r-0 border-l-0 rounded-none" placeholder="2" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Typography variant="p" className="mb-[8px] flex">
                                    points for every
                                </Typography>
                                <FormField
                                    control={form.control}
                                    name={`score[${index}].count`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input min={1} type="number" className="p-0 border-b-2 border-t-0 border-r-0 border-l-0 rounded-none" placeholder="2" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`score[${index}].measuring_unit`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="text" className="p-0 border-b-2 border-t-0 border-r-0 border-l-0 rounded-none" placeholder="euro revenue" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
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