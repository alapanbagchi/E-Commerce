'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import Typography from "@/components/ui/Typography"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import CONTESTDATA from "@/lib/contestData"
import { RocketIcon } from "@/lib/icons/RocketIcon"
import { cn } from "@/lib/utils"
import { Trophy } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useFormContext, useWatch } from "react-hook-form"

export const ContestPrizeForm = ({ showSubmitButton = false }: { showSubmitButton: boolean }) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const typeWatcher = useWatch({ control: form.control, name: "type" })
    const sizeWatcher = useWatch({ control: form.control, name: "size" })
    useEffect(() => {
        router.replace(
            pathName + `?step=${searchParams.get("step")}` + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`,  
            { scroll: false }
        )
    }, [typeWatcher, sizeWatcher])

    const onSubmit = () => {

    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-2">
                Chose the prize
            </Typography>
            <Typography variant="p" className="mb-4">
                Choose whatever contest fits your businesses needs best. You can choose between the two basic types score and deadline contest as well as the size of your contest in the three sizes S, M and L
            </Typography>
            <Form {...form}>
                <form action="" className="space-y-3">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Contest Type*</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex !space-y-0 space-x-0 items-center"
                                    >
                                        <FormItem className="w-1/2 flex rounded-lg relative space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="SCORE" className="w-full h-full absolute rounded-none opacity-0" />
                                            </FormControl>
                                            <FormLabel className={cn(
                                                form.getValues("type") === "SCORE" ? "text-score-foreground bg-score border-score-foreground" : "",
                                                "p-4 w-full border-2 rounded-lg space-y-1 items-center transition-all"
                                            )}>
                                                <Typography variant="p" className="text-inherit">
                                                    Score Contest
                                                </Typography>
                                                <Typography variant="p" className="font-normal text-inherit">
                                                    First to reach the target score wins
                                                </Typography>
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="w-1/2 flex rounded-lg relative  space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="DEADLINE" className="w-full h-full absolute rounded-none opacity-0" />
                                            </FormControl>
                                            <FormLabel className={cn(
                                                form.getValues("type") === "DEADLINE" ? "bg-deadline border-deadline-foreground text-deadline-foreground" : "",
                                                "p-4 w-full border-2 rounded-lg space-y-0 items-center transition-all"
                                            )}>
                                                <Typography variant="p" className="text-inherit">
                                                    Deadline Contest
                                                </Typography>
                                                <Typography variant="p" className="text-inherit font-normal">
                                                    Highest Scorer Wins
                                                </Typography>
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Contest Size*</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex gap-4"
                                    >
                                        {
                                            CONTESTDATA.map((contest, index) => (
                                                <FormItem key={index} className="w-1/2 rounded-lg flex items-center  space-y-0 relative">
                                                    <FormControl className="relative">
                                                        <RadioGroupItem value={contest.id} className="w-full h-full absolute rounded-none opacity-0" />
                                                    </FormControl>
                                                    <FormLabel className={cn(
                                                        form.getValues("size") === contest.id ? form.getValues("type") === "SCORE" ? "text-score-foreground bg-score border-score-foreground" : "bg-deadline border-deadline-foreground text-deadline-foreground" : "",
                                                        "p-4 w-full border-2 rounded-lg space-y-3 transition-all"
                                                    )}>
                                                        <div className="rounded-full flex items-center">
                                                            <Typography variant="p" className="text-inherit">
                                                                {contest.name}
                                                            </Typography>
                                                        </div>
                                                        <div className="flex space-x-3">
                                                            <Trophy />
                                                            <Typography variant="p_large" className="text-inherit">
                                                                {
                                                                    Intl.NumberFormat("en-UK", {
                                                                        style: "currency",
                                                                        currency: "EUR",
                                                                        minimumFractionDigits: 0,
                                                                        maximumFractionDigits: 0
                                                                    }).format(contest.grand_prize + contest.lottery_prize + contest.milestones.reduce((acc, curr) => acc + curr.prize, 0))
                                                                }
                                                            </Typography>
                                                        </div>
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>

        </div>
    )
}