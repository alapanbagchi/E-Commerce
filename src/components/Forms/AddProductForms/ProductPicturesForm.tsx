'use client'

import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { Camera, Cone, Image, Magnet, PictureInPicture, PictureInPicture2, Ruler, ShapesIcon, ShoppingCart } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    images: z.array(z.string()).max(9).min(1)
})
const className = "w-14 h-14 stroke-accent-foreground/30"
const icons = [
    {
        icon: <Camera className={className} strokeWidth="1.2px" />,
        name: "Primary Photo"
    },
    {
        icon: <Cone className={className} strokeWidth="1.2px" />,
        name: "Every angle"
    },
    {
        icon: <ShapesIcon className={className} strokeWidth="1.2px" />,
        name: "Every single angle"
    },
    {
        icon: <PictureInPicture className={className} strokeWidth="1.2px" />,
        name: "Details"
    },
    {
        icon: <PictureInPicture2 className={className} strokeWidth="1.2px" />,
        name: "In Use"
    },
    {
        icon: <Image className={className} strokeWidth="1.2px" />,
        name: "Variations"
    },
    {
        icon: <Ruler className={className} strokeWidth="1.2px" />,
        name: "Size and Scale"
    },
    {
        icon: <ShoppingCart className={className} strokeWidth="1.2px" />,
        name: "Marketable"
    },
]

export const ProductPicturesForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            images: []
        },
    })
    const onSubmit = () => {

    }
    return (
        <div className="border p-4 rounded-lg bg-white">
            <Typography variant="h4" className="mb-4">
                Product Images
            </Typography>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-4 gap-2">
                    {
                        Array.from({ length: 8 }).map((_, index) => {
                            return (
                                <div className="flex w-full p-3 h-[200px] relative gap-2 cursor-pointer justify-center items-center bg-accent rounded-lg aspect-square flex-col">
                                    <div className="border-[3px] border-foreground/20 rounded-lg border-dotted w-full h-[90%] flex justify-center items-center">
                                        {icons[index].icon}
                                    </div>
                                    <div className="h-[10%]">
                                        <Typography variant="p_small" className="text-center text-accent-foreground/50 font-medium">
                                            {icons[index].name}
                                        </Typography>
                                    </div>
                                    <Input type="file" name={`images[${index}]`} className="absolute w-full h-full opacity-0" />
                                </div>
                            )
                        })
                    }
                </form>
            </Form>
        </div>
    )
}