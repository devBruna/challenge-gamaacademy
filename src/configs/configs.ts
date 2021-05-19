import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) 

export default {

    Server: {
        port: process.env.PORT
    },
    
}