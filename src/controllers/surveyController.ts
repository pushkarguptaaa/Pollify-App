import SurveyModel from "../models/surveyModel";
import { Request, Response } from "express";

class SurveyController{
    async getAllSurveys(req: Request, res: Response): Promise<void>{
        try {
            const surveys = await SurveyModel.getAllSurveys();
            res.status(200).json(surveys);
          } catch (error: any) {
            res.status(500).json({ message: error.message });
          }
    }

    async getSurveyById(req: Request, res: Response): Promise<void>{
        try {
            const survey = await SurveyModel.getSurveyById(parseInt(req.params.id));
            if (survey == null) {
              res.status(404).json({ message: 'Survey not found' });
              return;
            }
            res.status(200).json(survey);
          } catch (error: any) {
            res.status(500).json({ message: error.message });
          }
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