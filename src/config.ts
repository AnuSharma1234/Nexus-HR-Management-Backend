import { config } from 'dotenv'
config()

const DEFAULT_PORT = 3000

export const PORT = process.env.PORT ? Number(process.env.PORT) : DEFAULT_PORT

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info'