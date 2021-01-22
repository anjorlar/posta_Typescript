import * as dotenv from "dotenv"
dotenv.config()

const settings = {
    PORT: process.env.PORT,
    MONGODB: {
        MONGOURL: process.env.DB,
        TESTDB: process.env.TESTDB
    }
}


export default settings