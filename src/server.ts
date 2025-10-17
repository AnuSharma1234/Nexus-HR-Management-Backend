import { PORT } from "./config";
import app from "./app";
import logger from "./utils/logger.util";

app.listen(PORT, () => {
    try{
        logger.info(`Server started at http://localhost:${PORT}`)
    }catch(error){
        logger.error(error)
    }
});