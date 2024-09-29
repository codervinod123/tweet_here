import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

// eslint-disable-next-line
const PORT = process.env.PORT;
// eslint-disable-next-line
const MONGO_URL = process.env.MONGO_URL;
// eslint-disable-next-line
const EMAIL_ID = process.env.EMAIL_ID;
// eslint-disable-next-line
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

export { PORT, MONGO_URL, EMAIL_ID, EMAIL_PASSWORD};
