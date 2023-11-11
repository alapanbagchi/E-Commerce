import { cn } from "@/lib/utils"
import Typography from "../ui/Typography"
import { CheckCircle } from "lucide-react"
import { Separator } from "../ui/Seperator"

interface ContestRequirementsProps {
    allowed_countries: string[]
    additional_requirements?: string[]
    type: "DEADLINE" | "SCORE"
}
export const ContestRequirements = ({ allowed_countries, additional_requirements, type }: ContestRequirementsProps) => {
    const requirements = [
        allowed_countries.length > 0 ? 'Participants must be from ' + allowed_countries?.join(" or ") : "Participants from all countries are allowed to participate",
        ...additional_requirements || []
    ]
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Requirements
            </Typography>
            <div>
                {
                    requirements?.map((requirement, index) => (
                        <>
                            <div className={cn("transition-all flex gap-2 hover:bg-accent rounded-lg py-4 items-center", type==="SCORE" ? "hover:bg-score hover:text-score-foreground" : "hover:bg-deadline hover:text-deadline-foreground")}>
                                <Typography variant="p_large" className={cn("font-medium gap-2 pl-4 flex items-center text-inherit")}>
                                    0{index + 1}. {requirement}
                                </Typography>
                            </div>
                            <Separator />
                        </>
                    ))
                }
            </div>
        </div>
    )
}