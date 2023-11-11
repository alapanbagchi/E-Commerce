"use client"
import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import Typography from "@/components/ui/Typography"
import { Textarea } from "@/components/ui/textarea"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useFormContext } from "react-hook-form"
export const AboutContestForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()
    const onSubmit = async () => {
        const isValid = await form.trigger(fields, { shouldFocus: true })
        if (isValid) {
            router.push(pathName + "?step=7" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`, { scroll: false })
        }
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Tell us a little about your contest
            </Typography>
            <Form {...form} >
                <form onSubmit={() => { }} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contest Description*</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="We are a new food delivery service which specializes in serving the meals faster than any competitor. We guarantee to deliver within 15 min after ordering. To achieve this we encourage our partner restaurants to only offer food which they can finalize pretty fast, as well as our innovative food boxes and driver network." {...field} />
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
                                <FormLabel>Who is the target audience for your contest?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Ex. Restaurants, snacks and pubs in London within our area of business who are able to serve food extremely fast so that a driver can pick up and deliver it. You can also just put those meals of your menu on Quartermeal, which you can prepare rapidly" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What is the purpose of this contest?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Ex. We want to get our platform going, starting in London. For this we need restaurants to serve the food our drivers can deliver and our customers love to eat within 15 min" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="how_to_win"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How to win the contest?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Ex. This is a large contest so you win if you have the most points within 45 days" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="additional_details"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Additional Details?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Ex. Our delivery drivers are ready to pick up your food immediately. Also we are gonna make a huge parallel marketing campaign in social media and on wallpapers targeting people in London ordering their deliveries on Quartermeal" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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