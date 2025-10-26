import { createClient } from "redis";
import logger from "../../utils/logger.util";

const client = createClient({
    url : "redis://localhost:6379",
})

client.on("error", (err) => logger.error("Redis client error: ",err))

export default client