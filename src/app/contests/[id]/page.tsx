import { getContestData } from "@/app/action"
import { AboutContest } from "@/components/ContestPage/AboutContest"
import { BasicInformation } from "@/components/ContestPage/BasicInformation"
import { ContestNavigation } from "@/components/ContestPage/ContestNavigation"
import { ContestPrizeInfo } from "@/components/ContestPage/ContestPrizeInfo"
import { ContestRequirements } from "@/components/ContestPage/ContestRequirements"
import { ContestRules } from "@/components/ContestPage/ContestRules"
import { HowToScore } from "@/components/ContestPage/HowToScore"

const ContestPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const res = await getContestData(id)
    console.log(res)
    return (
        <div>
            {/* Banner */}
            <div className="w-full fixed top-16 h-[60vh] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
            </div>
            {/* Main body */}
            <div className="absolute flex w-full h-fit bg-white top-[60vh] rounded-[50px]">
                <div className="max-w-[1400px] h-fit mx-auto flex py-10 gap-10">
                    <div className="w-3/4">
                        <BasicInformation
                            title="Grow on Quartermeal with your restaurant in London"
                            company_name="Quartermeal"
                            tags={["#restaurant", "#london"]}
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?"
                            best_result={100}
                            size="LARGE"
                            total_participants={100}
                            type="SCORE"
                            company_link="https://www.google.com"
                            grand_prize={100}
                        />
                        <div className="pl-[calc(6rem+32px)] flex flex-col mt-8 gap-8">
                            <ContestPrizeInfo
                                type={"SCORE"}
                                size={"LARGE"}
                                startDate={new Date()}
                            />
                            <AboutContest
                                type="SCORE"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?"
                                how_to_win="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?"
                                purpose="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?"
                                target_audience="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?"
                            />
                            <HowToScore
                                type="SCORE"
                                score={
                                    [
                                        {
                                            points: 100,
                                            count: 1,
                                            measuring_unit: "€100 revenue"
                                        },
                                        {
                                            points: 100,
                                            count: 1,
                                            measuring_unit: "order from a new customer"
                                        },
                                        {
                                            points: 100,
                                            count: 1,
                                            measuring_unit: "order from a new customer"
                                        },
                                    ]
                                }
                            />
                            <ContestRequirements
                                allowed_countries={["UK", "US"]}
                                additional_requirements={["Must be a restaurant", "Must be in London"]}
                                type="SCORE"
                            />
                            <ContestRules
                                rules={[
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?",
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?",
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta libero. Exercitationem nobis cum soluta cumque sunt, provident vero saepe quo ullam placeat unde, molestias dolorum dolores officia quaerat ex.Animi, repellendus doloribus aut ut quos exercitationem in! Dicta perferendis adipisci veniam corporis quisquam explicabo! Veniam officia ipsum temporibus voluptate tempore eaque ratione nostrum dolores. Officiis nisi quidem reiciendis minus?",
                                ]}
                                type="SCORE"
                            />
                        </div>
                    </div>
                    <div className="w-1/4">
                        <ContestNavigation
                            type="SCORE"
                            links={[
                                {
                                    label: "Status",
                                    value: "status"
                                },
                                {
                                    label: "About",
                                    value: "about"
                                },
                                {
                                    label: "How to Score",
                                    value: "score"
                                },
                                {
                                    label: "Requirements",
                                    value: "requirements"
                                },
                                {
                                    label: "Rules",
                                    value: "rules"
                                },
                                {
                                    label: "Announcements",
                                    value: "announcements"
                                },
                                {
                                    label: "FAQs",
                                    value: "faq"
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContestPage