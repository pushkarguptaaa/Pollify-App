import { PrismaClient, Survey } from "@prisma/client";

const prisma = new PrismaClient()

class SurveyModel{
    static async getAllSurveys(): Promise<Survey[]>{
        return await prisma.survey.findMany()
    }

    static async getSurveyById(id: number): Promise<Survey | null>{
        return await prisma.survey.findUnique({where:{id}})
    }

    static async createSurvey(data: Omit<Survey, 'id'>): Promise<Survey> {
        return  await prisma.survey.create({data})
    }

    static async updateSurvey(id: number, data: Partial<Survey>):Promise<Survey> {
        return await prisma.survey.update({
            where: {id},
            data
        })
    }

    static async  deleteSurvey(id: number): Promise<Survey> {
        return await prisma.survey.delete({
            where: {id}
        })
    }
}

export default SurveyModel