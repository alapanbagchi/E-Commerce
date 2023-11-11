import Link from "next/link"
import { Button } from "../ui/Button"
import Typography from "../ui/Typography"
import { Badge } from "../ui/badge"
import { Separator } from '../ui/Seperator'
import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface BasicInformationProps {
    title: string
    company_name: string
    tags: string[]
    description: string
    company_link?: string
    size: "SMALL" | "MEDIUM" | "LARGE"
    type: "SCORE" | "DEADLINE"
    best_result: number
    total_participants: number
    grand_prize: number
}

export const BasicInformation = ({ title, company_name, company_link, tags, description, best_result, size, total_participants, type, grand_prize }: BasicInformationProps) => {
    const level = {
        "SMALL": 1,
        "MEDIUM": 2,
        "LARGE": 3
    }
    return (
        <section id="basic">
            <div className="flex gap-8">
                <div className="w-24 h-24 bg-accent rounded-lg">
                    <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex flex-col justify-between">
                    <Typography variant="h1_small">{title}</Typography>
                    <Button variant="link" className="p-0 m-0 w-fit -mt-2 h-fit text-muted-foreground">
                        {
                            company_link ? (
                                <Link href={company_link} as={`/companies/${company_name}`}>
                                    {company_name}
                                </Link>
                            ) : (
                                company_name
                            )
                        }
                    </Button>
                    <div>
                        {
                            tags.map((tag, index) => (
                                <Badge variant="secondary" className="mr-2 font-medium" key={index}>{tag}</Badge>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mt-8 pl-[calc(6rem+32px)]">
                <Typography variant="p">{description}</Typography>
            </div>
            <div className="pl-[calc(6rem+32px)]">
                <div className="flex gap-10 mt-8">
                    <div className="flex flex-col">
                        <Typography variant="p" className="text-muted-foreground">Prize Pool</Typography>
                        <Typography variant="h1_small">
                            {
                                Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(grand_prize)
                            }
                        </Typography>
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex flex-col">
                        <Typography variant="p" className="text-muted-foreground">Total Participants</Typography>
                        <Typography variant="h1_small">{total_participants}</Typography>
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex flex-col">
                        <Typography variant="p" className="text-muted-foreground">Contest Level</Typography>
                        <div className="mt-2 flex gap-2">
                            {
                                Array.from({ length: level[size] }).map((_, index) => (
                                    <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M12.66 12.18C12.69 12.29 12.7 12.4 12.7 12.5C12.73 13.15 12.44 13.85 11.97 14.28C11.75 14.47 11.39 14.67 11.11 14.75C10.23 15.06 9.35 14.62 8.83 14.11C9.77 13.89 10.32 13.21 10.5 12.5C10.62 11.89 10.37 11.38 10.27 10.78C10.17 10.2 10.19 9.71 10.4 9.18C10.55 9.47 10.71 9.77 10.9 10C11.5 10.78 12.45 11.12 12.66 12.18ZM20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10ZM15.16 10.56L15.06 10.36C14.9 10 14.45 9.38 14.45 9.38C14.27 9.15 14.05 8.94 13.85 8.74C13.32 8.27 12.73 7.94 12.22 7.45C11.05 6.31 10.79 4.44 11.54 3C10.79 3.18 10.14 3.58 9.58 4.03C7.55 5.65 6.75 8.5 7.71 10.95C7.74 11.03 7.77 11.11 7.77 11.21C7.77 11.38 7.65 11.53 7.5 11.6C7.31 11.67 7.13 11.63 7 11.5C6.93 11.46 6.9 11.42 6.87 11.37C6 10.26 5.84 8.66 6.43 7.39C5.12 8.45 4.41 10.24 4.5 11.92C4.56 12.31 4.6 12.7 4.74 13.09C4.85 13.56 5.06 14 5.3 14.44C6.14 15.78 7.61 16.75 9.19 16.94C10.87 17.15 12.67 16.85 13.96 15.7C15.4 14.4 15.9 12.33 15.16 10.56Z" className={cn("w-8 h-8 rounded-full flex items-center justify-center", type === "SCORE" ? "fill-score-foreground" : "fill-deadline-foreground")}></path>
                                    </svg>
                                ))
                            }

                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex flex-col">
                        <Typography variant="p" className="text-muted-foreground">Best Result</Typography>
                        <Typography variant="h1_small">{best_result}</Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}