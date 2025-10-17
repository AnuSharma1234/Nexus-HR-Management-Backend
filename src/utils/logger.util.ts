import winston from 'winston'
import { LOG_LEVEL } from '../config'

const logLevels = {
    fatal : 0,
    error : 1,
    warn :  2,
    info :  3,
    debug : 4,
    trace : 5,
}

const logger = winston.createLogger({
    levels : logLevels,
    level : LOG_LEVEL || 'info',
    format : winston.format.cli(),
    transports : [new winston.transports.Console()],
})

export default logger

