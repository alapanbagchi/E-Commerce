import { ChevronDown } from "lucide-react"
import Typography from "../ui/Typography"
import { ILink } from "./MainMenu"
import Link from "next/link"
import { usePathname, useParams } from "next/navigation"

export const MainMenuItem = ({link, active}: {link:ILink, active: boolean}) => {
    console.log(link.title.toLowerCase(), active)
    return (
        link.children.length > 0 ? (
            <div className="p-2 flex items-center gap-3 hover:bg-accent cursor-pointer" >
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img width={24} height={24} src={`data:image/svg+xml;utf8,${encodeURIComponent(link.icon)}`} alt="" />
                </div>
                <Typography variant="p">
                    {link.title}
                </Typography>
                <ChevronDown size={20} className="ml-auto" />
            </div >
        ) : (
            <Link href={link.href}>
                <div className={`p-2 flex items-center gap-3 hover:bg-accent cursor-pointer ${active ? 'bg-accent' : ''}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img width={24} height={24} src={`data:image/svg+xml;utf8,${encodeURIComponent(link.icon)}`} alt="" />
                    </div>
                    <Typography variant="p">
                        {link.title}
                    </Typography>
                </div>
            </Link>
        )
    )
}