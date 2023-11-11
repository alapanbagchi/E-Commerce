import { CoinsIcon } from "lucide-react"
import Typography from "../ui/Typography"
import { cn } from "@/lib/utils"

interface HowToScoreProps {
    points: number
    count: number
    measuring_unit: string
}

export const HowToScore = ({ score, type }: { score: HowToScoreProps[], type: "DEADLINE" | "SCORE" }) => {
    return (
        <div>
            <Typography variant="h1_small" className="mb-4">
                How to score
            </Typography>
            <div className="flex-col grid grid-cols-3 gap-4">
                {
                    score.map((score, index) => (
                        <div className={cn("flex w-full transition-all gap-4 rounded-lg group py-4 px-4 border-2", (type === "SCORE" ? "hover:text-score-foreground hover:bg-score hover:border-score-foreground" : "group-hover:text-deadline-foreground hover:border-deadline-foreground"))}>
                            
                            <div className="space-y-2 w-[calc(100%-48px)]">
                                <Typography variant="p_large" className="font-medium text-inherit">
                                    0{index + 1}.
                                </Typography>
                                <Typography variant="p" className="text-inherit">
                                    You get {score.points} points for every {score.count > 1 ? score.count : ''} {score.measuring_unit}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}