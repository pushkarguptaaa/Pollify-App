"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surveyModel_1 = __importDefault(require("../models/surveyModel"));
class SurveyController {
    getAllSurveys(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const surveys = yield surveyModel_1.default.getAllSurveys();
                res.status(200).json(surveys);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getSurveyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const survey = yield surveyModel_1.default.getSurveyById(parseInt(req.params.id));
                if (survey == null) {
                    res.status(404).json({ message: 'Survey not found' });
                    return;
                }
                res.status(200).json(survey);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    createSurvey(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newSurvey = yield surveyModel_1.default.createSurvey(req.body);
                res.status(201).json({ newSurvey });
            }
            catch (err) {
                res.status(400).json({
                    msg: err.message
                });
            }
        });
    }
    updateSurvey() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteSurvey() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = SurveyController;
