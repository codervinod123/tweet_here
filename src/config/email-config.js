import nodemailer from "nodemailer";
import { EMAIL_ID, EMAIL_PASSWORD } from "./serverConfig.js";

const sender=nodemailer.createTransport({
  service:"Gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASSWORD,
  },
});

export default sender;