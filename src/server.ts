import { PORT } from "./config";
import app from "./app";
import logger from "./utils/logger.util";
import connectMongoDb from "./database/mongodb/connect.db";
import prisma from "./database/postgres/prisma.client";

app.listen(PORT, async () => {
    try{
        await connectMongoDb()
        await prisma.$connect()
        logger.info(`Connected to PostgreSQL Succesfully`)
        logger.info(`Server started at http://localhost:${PORT}`)
    }catch(error){
        logger.error(error)
    }
});