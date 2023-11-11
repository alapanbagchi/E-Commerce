import { cn } from "@/lib/utils"
import Typography from "../ui/Typography"

export const ContestNavigation = ({ links, type }: { links: { label: string, value: string }[], type: "SCORE" | "DEADLINE" }) => {
    return (
        <div>
            {
                links.map(link => (
                    <div className={cn("px-2 py-3 rounded-lg cursor-pointer transition-all", type == "SCORE" ? "group hover:bg-score hover:text-score-foreground" : "hover:bg-deadline")}>
                        <Typography variant="p" className="font-medium gap-2 group-hover:text-inherit pl-4 text-muted-foreground flex items-center">
                            {link.label}
                        </Typography>
                    </div>
                ))
            }
        </div>
    )
}