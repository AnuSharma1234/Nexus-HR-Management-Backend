import mongoose from "mongoose";
import logger from "../../utils/logger.util";
import { MONGO_URI } from "../../config";

const connectMongoDb = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        logger.info('Connected to MongoDB Succesfully')
    }catch(error){
        logger.error(error)
        console.log(error) 
        process.exit(1)
    }
}

export default connectMongoDb