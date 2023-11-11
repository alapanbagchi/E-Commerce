import { cn } from "@/lib/utils"
import Typography from "../ui/Typography"

interface AboutContestProps {
    description: string
    purpose?: string
    target_audience?: string
    how_to_win?: string
    type: "DEADLINE" | "SCORE"
}

export const AboutContest = ({ description, purpose, target_audience, how_to_win, type }: AboutContestProps) => {
    return (
        <section id="about_contest">
            <div>
                <Typography variant="h1_small" className="mb-4">
                    About this contest
                </Typography>
                <Typography variant="p" className="mb-4">
                    {description}
                </Typography>
            </div>
            {
                purpose && (
                    <div className={cn("py-4 pl-8 border-l-2 transition-all", type==="SCORE" ? "hover:border-score-foreground hover:bg-score hover:text-score-foreground" : "hover:border-deadline-foreground hover:bg-deadline hover:text-deadline-foreground")}>
                        <Typography variant="p_large" className="mb-4 font-medium text-inherit">
                            The purpose of this contest
                        </Typography>
                        <Typography variant="p" className="text-inherit">
                            {description}
                        </Typography>
                    </div>
                )
            }
            {
                target_audience && (
                    <div className={cn("py-4 pl-8 border-l-2 transition-all", type==="SCORE" ? "hover:border-score-foreground hover:bg-score hover:text-score-foreground" : "hover:border-deadline-foreground hover:bg-deadline hover:text-deadline-foreground")}>
                        <Typography variant="p_large" className="mb-4 font-medium text-inherit">
                            Target audience
                        </Typography>
                        <Typography variant="p" className="pb-4 text-inherit">
                            {description}
                        </Typography>
                    </div>
                )
            }
            {
                how_to_win && (
                    <div className={cn("py-4 pl-8 border-l-2 transition-all", type==="SCORE" ? "hover:border-score-foreground hover:bg-score hover:text-score-foreground" : "hover:border-deadline-foreground hover:bg-deadline hover:text-deadline-foreground")}>
                        <Typography variant="p_large" className="mb-4 font-medium text-inherit">
                            How to win
                        </Typography>
                        <Typography variant="p" className="text-inherit">
                            {description}
                        </Typography>
                    </div>
                )
            }
        </section>
    )
}