"use client"
import { icons } from "@/lib/icons"
import Typography from "../ui/Typography"
import { MainMenuItem } from "./MainMenuItem"
import { useParams, usePathname } from "next/navigation"

export interface ILink {
    icon: string
    title: string
    children: string[]
    href: string
}


export default () => {
    const path = usePathname()
    const params = useParams()
    const currentPath = path.split(`/me/shops/${params.shopid}/`)[1]?.split('/')[0]
    console.log(currentPath)
    const links: ILink[] = [
        {
            icon: icons.Home,
            title: 'Dashboard',
            children: [],
            href: `/me/shops/${params.shopid}/dashboard`
        },
        {
            icon: icons.Listings,
            title: 'Listings',
            children: [],
            href: `/me/shops/${params.shopid}/listings`
        }
    ]
    return (
        <div className="w-full h-full border-r">
            <div className="h-16 p-3 border-b flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img src="https://www.etsy.com/images/seller-tools/shop_manager.001.svg" alt="" />
                </div>
                <Typography variant="p_large" className="font-medium">
                    Alapan's Store
                </Typography>
            </div>
            <div>
                {links.map((link, index) => (
                    <MainMenuItem key={index} link={link} active={currentPath ? link.title.toLowerCase() === currentPath.toLowerCase() : false} />
                ))}
            </div>
        </div>
    )
}