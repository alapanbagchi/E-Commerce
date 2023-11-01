import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Typography from "@/components/ui/Typography"
import { SearchIcon } from "@/lib/icons/searchIcon"
import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
    title: 'Listings',
    description: 'Shop product listings',
}

export default () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-16 border-b flex items-center p-4">
                <Typography variant="h1_small">
                    Listings
                </Typography>
                <div className="ml-auto flex items-center gap-4">
                    <div className="flex items-center border-2 px-3 focus-within:border-primary group transition-all">
                        <SearchIcon width="20" height="20" paths={["stroke-border stroke-2 group-focus-within:stroke-primary transition-all"]} />
                        <Input variant="ghost" className="w-[250px]" placeholder="Search by title, tag or SKU" />
                    </div>

                    <Button asChild>
                        <Link href={`listings/create`}>
                            <Typography variant="button" className="text-primary-foreground">
                                Create Listing
                            </Typography>
                        </Link>
                    </Button>


                </div>
            </div>
            <div className="container">
            </div>
        </div>
    )
}