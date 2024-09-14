import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})

// eslint-disable-next-line
const PORT=process.env.PORT;
// eslint-disable-next-line
const MONGO_URL=process.env.MONGO_URL;

export {PORT,MONGO_URL};

