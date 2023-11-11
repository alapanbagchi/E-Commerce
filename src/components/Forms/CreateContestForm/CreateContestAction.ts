"use server"

import prisma from "@/lib/prisma"
import { ContestWithRelations } from "../../../../prisma/generated/zod"
import { getServerSession } from "next-auth"

export const CreateContestAction = async (data: ContestWithRelations) => {
    try {
        const session = await getServerSession()
        if (!session) throw new Error("User not logged in")
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        })
        if (!user) {
            throw new Error("User not found")
        }
        data.score = data.score.filter((score) => score.points && score.count && score.measuring_unit)
        const res = await prisma.contest.create({
            data: {
                title: data.title,
                description: data.description,
                company_name: data.company_name,
                company_logo: data.company_logo,
                organizer_platform: data.organizer_platform,
                type: data.type,
                size: data.size,
                payment_status: "UNPAID",
                additional_details: data.additional_details,
                additional_requirements: data.additional_requirements,
                allowed_countries: data.allowed_countries,
                banner: data.banner,
                company_link: data.company_link,
                company_description: data.company_description,
                how_to_win: data.how_to_win,
                rules: data.rules,
                purpose: data.purpose,
                target_audience: data.target_audience,
                startDate: new Date(),
                score: {
                    createMany: {
                        data: data.score.map((score) => {
                            return {
                                points: score.points,
                                count: score.count,
                                measuring_unit: score.measuring_unit,
                            }
                        })
                    }
                },
                organizer: {
                    connect: {
                        email: session.user.email
                    }
                },
                endDate: new Date(),
            }
        })
        console.log(res)
        return {
            success: true,
            message: "Contest created successfully",
            data: res
        }
    } catch(error: any) {
        console.log(error)
        return {
            success: false,
            message: error.message
        }
    }
}