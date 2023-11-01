'use client'

import { Button } from "@/components/ui/Button"
import { CategorySelect } from "@/components/ui/CategorySelect"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    brand_name: z.string().min(1, "Brand name is required"),
    product_name: z.string(),
    description: z.string(),
    category: z.string(),
})

export const BasicInformationForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brand_name: "",
            product_name: "",
            description: "",
            category: "",
        },
    })
    const onSubmit = () => {

    }
    return (
        <div className="border p-4 rounded-lg bg-white">
            <Typography variant="h4" className="mb-4">
                Basic Product Details
            </Typography>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="brand_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the name of your brand" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="product_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the name of your product" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Description*</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter a description of your product" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Description*</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a description of your product" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category*</FormLabel>
                                <FormControl>
                                    <CategorySelect />
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