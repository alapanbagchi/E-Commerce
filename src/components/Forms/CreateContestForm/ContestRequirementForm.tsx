'use client'

import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useFormContext, useWatch } from "react-hook-form"
import { COUNTRIES } from "@/lib/countries"
import { MultiSelect } from "@/components/ui/MultiSelect"
import { Label } from "@/components/ui/Label"
import { useEffect } from "react"

export const ContestRequirementForm = ({ showSubmitButton = true, fields }: {
    showSubmitButton?: boolean
    fields: string[]
}) => {
    const form = useFormContext()
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const addditionalRequirementWatcher = useWatch({
        control: form.control,
        name: "additional_requirements"
    })
    useEffect(() => {
        if (form.getValues("additional_requirements").slice(-1)[0] !== "") {
            form.setValue("additional_requirements", [...form.getValues("additional_requirements"), ""])
        }
        if (form.getValues("additional_requirements").slice(-1)[0] === "" && form.getValues("additional_requirements").slice(-2)[0] === "" && form.getValues("additional_requirements").length > 1) {
            form.setValue("additional_requirements", form.getValues("additional_requirements").slice(0, -1))
        }
        console.log(form.formState.errors)
    }, [addditionalRequirementWatcher])
    const onSubmit = async () => {
        const isValid = await form.trigger(fields)
        if (isValid) router.push(pathName + "?step=6" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`, { scroll: false })
    }
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Contest Requirements
            </Typography>
            <Form {...form}>
                <form onSubmit={() => { }} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="allowed_countries"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <MultiSelect
                                    placeholder="Select countries"
                                    selected={field.value}
                                    options={
                                        COUNTRIES.map(country => (
                                            {
                                                label: country.name,
                                                value: country.name
                                            }
                                        ))
                                    }
                                    {...field}
                                />
                                <FormDescription>
                                    Select the countries that are eligible to participate in your contest. If you don't select any country, all countries will be eligible.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="space-y-2">
                        <Label>Additional Requirements</Label>
                        {
                            form.getValues("additional_requirements").map((_: unknown, index: number) => (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={`additional_requirements[${index}]`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl className="flex items-center">
                                                <Input
                                                    placeholder="Do you have additional requirements" {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))
                        }
                    </div>
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