'use client'

import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useFormContext } from "react-hook-form"

export const BasicInformationForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()
    const onSubmit = async () => {
        const isValid = await form.trigger(fields)
        if (isValid) router.push(pathName + "?step=2" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`)
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Basic Contest Details
            </Typography>
            <Form {...form}>
                <form onSubmit={() => { }} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contest Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a meaningful and memorable title of your contest" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="organizer_platform"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Where is your contest going to take place?*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ex: https://www.yourwebsite.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="banner"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contest Banner*</FormLabel>
                                <FormControl>
                                    <div className="w-full h-[200px] relative bg-accent rounded-xl border-2 focus-within:border-primary">
                                        <Input type="file" accept="image/*" className="w-full h-full rounded-none opacity-0 z-10 absolute top-0" placeholder="Ex: https://www.yourwebsite.com" {...field} />
                                        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                                            <Typography variant="p_bold" className="text-center">Drag and drop the competition banner to upload</Typography>
                                            <Typography variant="p_small" className="text-center">JPG, PNG, Recommended Size: 1680x400px</Typography>
                                        </div>
                                    </div>
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