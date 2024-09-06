import express from "express"
import bodyParser from "body-parser";
import createConnection from "./config/connection.js";
import { PORT } from "./config/serverConfig.js";


import router from "./routes/index.js";
import User from "./models/user-model.js";

import passport from "passport";
import {passportAuth} from "./config/jwt-auth-config.js";

import cors from "cors"


const startServer=()=>{
      const app=express();
 
      app.use(cors())
     
      app.use(passport.initialize());
      passportAuth(passport);

      app.listen(3001,async()=>{           

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));
           
            app.use('/api',router);

            await createConnection();
        
            console.log(`Server has Started on PORT no ${PORT}`);
           
      })
}

startServer();
