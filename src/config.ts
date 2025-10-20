import { config } from 'dotenv'
config()

//server backup port
const DEFAULT_PORT = 3000

//default port
export const PORT = process.env.PORT ? Number(process.env.PORT) : DEFAULT_PORT


//winston logger active log level
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info'


//mongo db uri
export const MONGO_URI = process.env.MONGO_URI ? String(process.env.MONGO_URI) : ''

//postgres db configs


