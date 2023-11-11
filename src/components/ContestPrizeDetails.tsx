import { RocketIcon } from "@/lib/icons/RocketIcon"
import Typography from "./ui/Typography"
import { Dices, Flag, TrophyIcon, ZapIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ContestConfigData } from "@/lib/contestData"
import { Button } from "./ui/Button"

export const ContestPrizeDetails = ({ currentContestConfig, type="SCORE", size="SMALL" }: { currentContestConfig: ContestConfigData, type: "SCORE" | "DEADLINE", size: "SMALL" | "MEDIUM" | "LARGE" }) => {
    return (
        <div className="mt-10 space-y-8">
            <div className="flex">
                <RocketIcon variant={size} />
                <div className="space-y-3">
                    <Typography variant="p_large" className="font-medium">
                        {currentContestConfig?.name}
                    </Typography>
                    <Typography variant="p">
                        {currentContestConfig?.description}
                    </Typography>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="w-1/2 space-y-4">
                    <div className="flex gap-4">
                        <div className={cn("w-12 h-12 flex items-center justify-center rounded-full", type === "SCORE" ? "bg-score-foreground" : "bg-deadline-foreground")}>
                            <TrophyIcon className={cn("w-6 h-6", type === "SCORE" ? "text-score" : "text-deadline")} />
                        </div>
                        <div>
                            <Typography variant="p_large" className="font-medium">
                                {
                                    Intl.NumberFormat("en-UK", {
                                        style: "currency",
                                        currency: "EUR",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    }).format(currentContestConfig?.grand_prize!)
                                }
                            </Typography>
                            <Typography variant="p" className="font-normal text-muted-foreground">
                                Grand Prize
                            </Typography>
                        </div>
                    </div>
                    {
                        currentContestConfig?.milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-4">
                                <div className={cn("w-12 h-12 flex items-center justify-center rounded-full", type === "SCORE" ? "bg-score-foreground" : "bg-deadline-foreground")}>
                                    <Flag fill="white" className={cn("w-5 h-5", type === "SCORE" ? "text-score" : "text-deadline")} />
                                </div>
                                <div>
                                    <Typography variant="p_large" className="font-medium">
                                        {
                                            Intl.NumberFormat("en-UK", {
                                                style: "currency",
                                                currency: "EUR",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }).format(milestone.prize)
                                        }
                                    </Typography>
                                    <Typography variant="p" className="font-normal text-muted-foreground">
                                        Milestone {index + 1}
                                    </Typography>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-foreground flex items-center justify-center rounded-full">
                            <ZapIcon fill="white" className="w-6 h-6 text-score" />
                        </div>
                        <div>
                            <Typography variant="p_large" className="font-medium">
                                {
                                    type === "SCORE" ? (
                                        currentContestConfig?.max_score + " Points"
                                    ) : (
                                        currentContestConfig?.days + " Days"
                                    )
                                }
                            </Typography>
                            {
                                type === "SCORE" ? (
                                    <Typography variant="p" className="font-normal text-muted-foreground">
                                        Contest Target
                                    </Typography>
                                ) : (
                                    <Typography variant="p" className="font-normal text-muted-foreground">
                                        Contest Deadline
                                    </Typography>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                            <Dices fill="white" className="w-6 h-6 text-score" />
                        </div>
                        <div>
                            <Typography variant="p_large" className="font-medium">
                                {
                                    Intl.NumberFormat("en-UK", {
                                        style: "currency",
                                        currency: "EUR",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    }).format(currentContestConfig?.lottery_prize!)
                                }
                            </Typography>
                            <Typography variant="p" className="font-normal text-muted-foreground">
                                Lottery Prize
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-fit p-5 space-y-3 bg-accent rounded-lg">
                    <div className="flex justify-between">
                        <Typography variant="p">
                            Grand Prize
                        </Typography>
                        <Typography variant="p_large" className="font-medium">
                            {
                                Intl.NumberFormat("en-UK", {
                                    style: "currency",
                                    currency: "EUR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(currentContestConfig?.grand_prize!)
                            }
                        </Typography>
                    </div>
                    {
                        currentContestConfig?.milestones.map((milestone, index) => (
                            <div key={index} className="flex justify-between">
                                <Typography variant="p">
                                    Milestone {index + 1}
                                </Typography>
                                <Typography variant="p_large" className="font-medium">
                                    {
                                        Intl.NumberFormat("en-UK", {
                                            style: "currency",
                                            currency: "EUR",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        }).format(milestone.prize)
                                    }
                                </Typography>
                            </div>
                        ))
                    }
                    <div className="flex justify-between">
                        <Typography variant="p">
                            Lottery Prize
                        </Typography>
                        <Typography variant="p_large" className="font-medium">
                            {
                                Intl.NumberFormat("en-UK", {
                                    style: "currency",
                                    currency: "EUR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(currentContestConfig?.lottery_prize!)
                            }
                        </Typography>
                    </div>
                    <div className="flex justify-between">
                        <Typography variant="p">
                            Platform Fees
                        </Typography>
                        <Typography variant="p_large" className="font-medium">
                            {
                                Intl.NumberFormat("en-UK", {
                                    style: "currency",
                                    currency: "EUR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(
                                    (currentContestConfig?.grand_prize! + currentContestConfig?.lottery_prize! + currentContestConfig?.milestones.reduce((acc, curr) => acc + curr.prize, 0)!) * 0.1
                                )
                            }
                        </Typography>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                        <Typography variant="p">
                            Total Prize
                        </Typography>
                        <Typography variant="p_large" className="font-medium">
                            {
                                Intl.NumberFormat("en-UK", {
                                    style: "currency",
                                    currency: "EUR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(
                                    (currentContestConfig?.grand_prize! + currentContestConfig?.lottery_prize! + currentContestConfig?.milestones.reduce((acc, curr) => acc + curr.prize, 0)!)
                                )
                            }
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}