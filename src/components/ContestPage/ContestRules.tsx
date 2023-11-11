import { cn } from "@/lib/utils"
import Typography from "../ui/Typography"

interface ContestRulesProps {
    rules: string[]
    type: "DEADLINE" | "SCORE"
}
export const ContestRules = ({ rules, type }: ContestRulesProps) => {
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                Rules
            </Typography>
            <div>
                {
                    rules?.map((rule, index) => (
                        <div className={cn("gap-2 pl-8 py-4 border-l-2 transition-all", type==="SCORE" ? "hover:border-score-foreground hover:bg-score hover:text-score-foreground" : "hover:border-deadline-foreground hover:bg-deadline hover:text-deadline-foreground")}>
                            <Typography variant="h1_small" className="font-medium text-inherit">
                                 0{index + 1}.
                            </Typography>
                            <Typography variant="p" className="pt-2 text-inherit">
                                {rule}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}