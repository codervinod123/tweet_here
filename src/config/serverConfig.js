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
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
// eslint-disable-next-line
const JWT_SECRET = process.env.JWT_SECRET;
// eslint-disable-next-line
const CLOUD_NAME = process.env.CLOUD_NAME;
// eslint-disable-next-line
const API_KEY = process.env.API_KEY;
// eslint-disable-next-line
const API_SECRET = process.env.API_SECRET;

export { 
  PORT,
  MONGO_URL,
  EMAIL_ID, 
  EMAIL_PASSWORD, 
  JWT_SECRET, 
  CLOUD_NAME, 
  API_KEY, 
  API_SECRET
};
