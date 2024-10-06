import { PrismaClient, Survey} from "@prisma/client";

const prisma = new PrismaClient()

interface SurveyInput {
    title: string;
    questions: QuestionInput[];
}

interface QuestionInput {
    text: string;
    options: OptionInput[];
}

interface OptionInput {
    text: string;
}

type SurveyUpdateData = Partial<SurveyInput>;

class SurveyModel{
    static async getAllSurveys(): Promise<Survey[]>{
        return await prisma.survey.findMany()
    }

    static async getSurveyById(id: number): Promise<Survey | null>{
        return await prisma.survey.findUnique({where:{id}})
    }

    static async createSurvey(data: SurveyInput): Promise<Survey> {
        return  await prisma.survey.create({
            data: {
                title: data.title,
                questions: {
                    create: data.questions.map(question => ({
                        text: question.text,
                        options: {
                            create: question.options.map(option => ({
                                text: option.text
                            }))
                        }
                    }))
                }
            }
        })
    }

    static async updateSurvey(id: number, data: SurveyUpdateData):Promise<Survey> {
        const updateData: any = {}; 

        if (data.title) {
            updateData.title = data.title;
        }

        if (data.questions) {
            updateData.questions = {
                create: data.questions.map(question => ({
                    text: question.text,
                    options: {
                        create: question.options?.map(option => ({
                            text: option.text,
                        })) || [],
                    },
                })),
            };
        }    

        return await prisma.survey.update({
            where: { id },
            data: updateData,
        });
    }

    static async  deleteSurvey(id: number): Promise<Survey> {
        return await prisma.survey.delete({
            where: {id}
        })
    }
}

export default SurveyModel