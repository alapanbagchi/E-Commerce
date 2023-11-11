import prisma from "@/lib/prisma"

export const getContestData = async (id: string) => {
    try {
        const res = await prisma.contest.findUnique({
            where: {
                id: id
            }
        })
        return {
            success: true,
            data: res
        }
    } catch(err: any) {
        return {
            success: false,
            message: err.message
        }
    }
}