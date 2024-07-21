import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})


const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;

export {PORT,MONGO_URL};

