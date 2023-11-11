import Link from "next/link"
import { Button } from "../ui/Button"
import { BrandLogo } from "@/lib/icons/BrandLogo"
import { auth } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Typography from "../ui/Typography"

export const Navbar = async () => {
    const session = await auth();
    const links = [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Demos",
            href: "/demos",
        },
        {
            name: "Contests",
            href: "/contests",
        },
        {
            name: "Contact Us",
            href: "/contactus",
        },
    ]
    return (
        <header className="fixed top-0 z-50 bg-background w-full h-16 border-b">
            <nav className="w-full h-full">
                <ul className="w-full h-full container flex items-center">
                    <li className="mr-8">
                        <Link href="/">
                            <BrandLogo />
                        </Link>
                    </li>
                    {
                        links.map((link) => {
                            return (
                                <li className="mr-8">
                                    <Link href={link.href}>
                                        <Typography variant="p_bold" className="opacity-70 transition-all hover:opacity-100">{link.name}</Typography>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {
                        session?.user ? (
                            <>
                                <li className="ml-auto mr-3 flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={session.user.avatar} />
                                        <AvatarFallback>{
                                            session.user.fullName.split(" ").map((name) => name[0]).join("")
                                        }</AvatarFallback>
                                    </Avatar>
                                </li>
                                <li>
                                    <Button asChild>
                                        <Link href="/contests/create">
                                            Create Contest
                                        </Link>
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="ml-auto mr-2">
                                    <Button variant="ghost" asChild>
                                        <Link href="?modal=signin">
                                            Sign in
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild>
                                        <Link href="?modal=signup">
                                            Sign up
                                        </Link>
                                    </Button>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}