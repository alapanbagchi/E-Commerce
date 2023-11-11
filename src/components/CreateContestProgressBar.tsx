import { cn } from "@/lib/utils"
import Typography from "./ui/Typography"

export const CreateContestProgressBar = ({ steps, activeIndex }: { steps: string[], activeIndex: number }) => {
    return (
        <div>
            {
                steps.map((step, index) => {
                    return (
                        <div key={index} className="items-center justify-between">
                            <div className="flex items-center">
                                <div className={cn("w-5 h-5 rounded-full mr-5", index < activeIndex ? 'bg-primary' : 'bg-accent')}>
                                </div>
                                <Typography variant="p">{step}</Typography>
                            </div>
                            {
                                index === steps.length - 1 ? null : (
                                    <div className={cn("w-[2px] h-[25px] bg-accent ml-[9px]", index + 1 < activeIndex ? "bg-primary" : "")} />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}