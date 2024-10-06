import express, {Application} from 'express'
import { config } from './config'
import surveyRoutes from './routes/surveyRoutes'

const app: Application = express()

app.use(express.json())

app.use('/api/surveys', surveyRoutes)

app.listen(config.port, () => {
    console.log(`Server is running at port ${config.port}`);
})