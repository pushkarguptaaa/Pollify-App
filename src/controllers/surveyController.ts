import SurveyModel from "../models/surveyModel";
import { Request, Response } from "express";

class SurveyController{
    async getAllSurveys(){

    }

    async getSurveyById(){

    }

    async createSurvey(req: Request, res: Response): Promise<void>{
        try{
            const newSurvey = await SurveyModel.createSurvey(req.body)
            res.status(201).json({newSurvey})
        } 
        catch(err: any){
            res.status(400).json({
                msg: err.message
            })
        }
    }

    async updateSurvey(){

    }

    async deleteSurvey() {
        
    }
}

export default SurveyController