import express , { ErrorRequestHandler , Request , Response , Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'


const app : Application = express()


app.use(cors())

app.use(express.json())

app.use(helmet())

app.use(compression())

app.use(morgan('tiny'))


export default app