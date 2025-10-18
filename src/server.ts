import { PORT } from "./config";
import app from "./app";
import logger from "./utils/logger.util";
import connectMongoDb from "./database/mongodb/connect.db";

app.listen(PORT, async () => {
    try{
        await connectMongoDb()
        logger.info(`Server started at http://localhost:${PORT}`)
    }catch(error){
        logger.error(error)
    }
});