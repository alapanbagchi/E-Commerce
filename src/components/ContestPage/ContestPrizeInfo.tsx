"use client"
import CONTESTDATA from "@/lib/contestData"
import { cn } from "@/lib/utils"
import Typography from "../ui/Typography"
import { Badge } from "../ui/badge"

export const ContestPrizeInfo = ({ type, size, startDate }: { type: "DEADLINE" | "SCORE", size: "SMALL" | "MEDIUM" | "LARGE", startDate: Date }) => {
    const grandPrize = CONTESTDATA.find(contest => contest.id === size)?.grand_prize
    const milestones = CONTESTDATA.find(contest => contest.id === size)?.milestones.map(milestone => (
        {
            points: milestone.points,
            date: new Date(startDate.getTime() + milestone.days * 24 * 60 * 60 * 1000),
            prize: milestone.prize
        }

    ))
    const getETA = (date: Date) => {
        const diff = date.getTime() - Date.now()
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        return `${days} days ${hours} hours ${minutes} minutes`
    }
    const lottery = CONTESTDATA.find(contest => contest.id === size)?.lottery_prize

    return (
        <section id="prize">
            <div className="flex gap-2 flex-col">
                {
                    milestones?.map((milestone, index) => (
                        <div key={index} className={cn("px-3 py-2 w-full flex group transition-all items-center gap-4 border rounded-lg", type==="SCORE" ? "hover:bg-score hover:text-score-foreground" : "hover:bg-deadline hover:text-deadline-foreground")}>
                            <div className={cn("p-2 rounded-full w-fit h-fit bg-accent")}>
                                <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path className={cn("fill-accent-foreground", type === "SCORE" ? "group-hover:fill-score-foreground" : "group-hover:fill-deadline-foreground")} fill-rule="evenodd" clip-rule="evenodd" d="M18.9068 9.72053L16.3236 2.51549C16.2393 2.27899 16.0293 2.11033 15.7818 2.07091C15.5334 2.03424 15.2813 2.13508 15.1273 2.33308C15.0742 2.40274 13.7734 4.01791 10.1911 3.80524C5.72231 3.54674 4.42615 6.15283 4.3739 6.26374C4.29598 6.42874 4.28681 6.61758 4.34823 6.78991L8.56856 18.5599H3.74048C3.36098 18.5599 3.05298 18.8679 3.05298 19.2474C3.05298 19.6269 3.36098 19.9349 3.74048 19.9349H14.9128C15.2923 19.9349 15.6003 19.6269 15.6003 19.2474C15.6003 18.8679 15.2923 18.5599 14.9128 18.5599H10.0288L8.33848 13.8437C8.71064 13.3505 9.88767 12.2139 12.6908 12.3816C17.0743 12.641 18.7445 10.4539 18.8133 10.3594C18.9489 10.1761 18.9838 9.93595 18.9068 9.72053Z"></path>
                                </svg>
                            </div>
                            <div>
                                <Typography variant="p_bold" className="mt-2 text-inherit">
                                    Milestone {index + 1}
                                </Typography>
                                <Typography variant="p" className="text-inherit">
                                    {milestone.date.toDateString()}
                                </Typography>
                            </div>
                            <div className="ml-auto flex">
                                <Typography variant="p_large" className="font-medium text-inherit">
                                    {
                                        Intl.NumberFormat(
                                            'en-DE',
                                            {
                                                style: 'currency',
                                                currency: 'EUR'
                                            }
                                        ).format(milestone.prize)
                                    }
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}