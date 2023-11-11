'use client'
import { CreateContestProgressBar } from "@/components/CreateContestProgressBar"
import { BasicInformationForm } from "@/components/Forms/CreateContestForm/BasicInformationForm"
import { FormProvider, useForm } from "react-hook-form"
import { ContestWithRelationsSchema } from "../../../../prisma/generated/zod"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ContestPrizeForm } from "@/components/Forms/CreateContestForm/ContestPrizeForm"
import { RocketIcon } from "@/lib/icons/RocketIcon"
import CONTESTDATA from "@/lib/contestData"
import Typography from "@/components/ui/Typography"
import { ContestPrizeDetails } from "@/components/ContestPrizeDetails"
import { Button } from "@/components/ui/Button"
import { ContestScoreForm } from "@/components/Forms/CreateContestForm/ContestScoreForm"
import { ContestRulesForm } from "@/components/Forms/CreateContestForm/ContestRulesForm"
import { AboutContestForm } from "@/components/Forms/CreateContestForm/AboutContestForm"
import { AboutCompanyForm } from "@/components/Forms/CreateContestForm/AboutCompanyForm"
import { ContestRequirementForm } from "@/components/Forms/CreateContestForm/ContestRequirementForm"

const steps = [
    'Basic Details',
    'Chose the prize',
    'How to score',
    'Contest Rules',
    'Requirements',
    'About Contest',
    'About Company',
]

const ContestCreationPage = () => {
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof ContestWithRelationsSchema>>({
        resolver: zodResolver(ContestWithRelationsSchema),
        defaultValues: {
            title: "",
            banner: "",
            organizer_platform: "",
            rules: [""],
            score: [{ points: 1, count: 1, measuring_unit: "" }],
            size: "SMALL",
            type: "SCORE",
            description: "",
            target_audience: "",
            purpose: "",
            how_to_win: "",
            additional_details: "",
            additional_requirements: [""],
            allowed_countries: [],
        },
        mode: "onChange"
    })
    const formStep = [
        ["title", "organizer_platform", "banner"],
        ["type", "size"],
        form.getValues("score").slice(0, -1).map((score: unknown, index: number) => {
            const arr = [`score[${index}].points`, `score[${index}].count`, `score[${index}].measuring_unit`]
            return [...arr]
        }).flat(),
        ["rules"],
        ["allowed_countries", "additional_requirements"],
        ["description", "target_audience", "purpose", "how_to_win", "additional_details"],
        ["company_logo", "company_name", "company_link", "company_description"]
    ]
    const formStepAggregator = (step: number) => {
        return formStep.slice(0, step).flat()
    }

    const step: number = parseInt(useSearchParams().get("step") as string)
    const searchParams = useSearchParams()
    let currentContestConfig = CONTESTDATA.find((contest) => contest.id === form.getValues("size"))
    useEffect(() => {
        currentContestConfig = CONTESTDATA.find((contest) => contest.id === form.getValues("size"))
        if (!currentContestConfig) router.push("/contests/create?step=1&size=SMALL&type=SCORE")
        if (isNaN(step)) router.push("/contests/create?step=1&size=SMALL&type=SCORE")
    }, [searchParams])
    console.log(form.watch())
    return (
        <div className="w-full h-full bg-accent mt-16">
            <div className="max-w-[1200px] mb-3 pt-5 mx-auto h-fit min-h-[100vh] flex gap-5">
                <div className="w-[400px] sticky top-20 rounded-lg p-5 bg-white border h-fit">
                    <CreateContestProgressBar steps={steps} activeIndex={step} />
                </div>
                <div className="w-full space-y-3">
                    <FormProvider {...form}>
                        <div className="p-6 rounded-lg bg-white">
                            <BasicInformationForm showSubmitButton={step === 1} fields={formStepAggregator(step)} />
                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 2 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <ContestPrizeForm showSubmitButton={step == 2} />
                            <ContestPrizeDetails size={form.getValues("size")} type={form.getValues("type")} currentContestConfig={currentContestConfig!} />
                            {
                                step === 2 && (
                                    <Button className="mt-6" onClick={async () => {
                                        const isValid = await form.trigger(["title", "organizer_platform", "banner", "type", "size"], { shouldFocus: true })
                                        if (isValid) router.push(pathname + "?step=3" + `&type=${form.getValues("type")}` + `&score=${form.getValues("size")}`, { scroll: false })
                                    }}>
                                        Continue
                                    </Button>
                                )
                            }

                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 3 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <ContestScoreForm showSubmitButton={step == 3} fields={formStepAggregator(step)} />
                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 4 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <ContestRulesForm showSubmitButton={step == 4} fields={formStepAggregator(step)} />
                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 5 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <ContestRequirementForm showSubmitButton={step == 5} fields={formStepAggregator(step)} />
                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 6 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <AboutContestForm showSubmitButton={step == 6} fields={formStepAggregator(6)} />
                        </div>
                        <div className={cn("p-6 rounded-lg bg-white",
                            step < 7 ? "opacity-50 pointer-events-none" : ""
                        )}>
                            <AboutCompanyForm showSubmitButton={step == 7} fields={formStepAggregator(7)} />
                        </div>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default ContestCreationPage