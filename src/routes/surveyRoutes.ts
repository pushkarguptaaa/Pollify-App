import { Router } from "express";
import SurveyController from "../controllers/surveyController";

const router: Router = Router()
const surveyController = new SurveyController()

router.get('/', surveyController.getAllSurveys)
router.get('/:id', surveyController.getSurveyById)
router.post('/', surveyController.createSurvey)
router.put('/:id', surveyController.updateSurvey)
router.delete('/:id', surveyController.deleteSurvey)

export default router