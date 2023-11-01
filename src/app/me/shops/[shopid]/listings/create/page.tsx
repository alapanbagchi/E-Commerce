import { BasicInformationForm } from "@/components/Forms/AddProductForms/BasicInformationForm"
import { ProductPicturesForm } from "@/components/Forms/AddProductForms/ProductPicturesForm"
import { Button } from "@/components/ui/Button"
import Typography from "@/components/ui/Typography"
import { BackIcon } from "@/lib/icons/BackIcon"
import Link from "next/link"

export default () => {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="w-full h-16 border-b flex items-center gap-1 p-4 bg-white">
                <Typography variant="h1_small">
                    Add a product
                </Typography>
                <div className="ml-auto flex items-center gap-1">
                    <Button variant="outline">
                        <Link href={`../listings`}>
                            Discard Listing
                        </Link>
                    </Button>
                    <Button >
                        Save Listing
                    </Button>
                </div>
            </div>
            <div className="p-4 flex gap-5 bg-accent h-full overflow-auto">
                <div className="w-1/2 h-fit space-y-5">
                    <BasicInformationForm />
                </div>
                <div className="w-1/2 h-fit space-y-5">
                    <ProductPicturesForm />
                </div>
            </div>
        </div>
    )
}