import express from "express"
import bodyParser from "body-parser";
import createConnection from "./config/connection.js";
import {TweetService} from "./services/tweet-service.js";
import { PORT } from "./config/serverConfig.js";

import { UserRepository } from "./repository/user-repository.js";
import { LikeRepository } from "./repository/like-repository.js";
import { LikeService } from "./services/like-service.js";
import { CommentService } from "./services/comment-service.js";
import { TrendingRepository } from "./repository/trening-repository.js";

import { passportAuth } from "./config/jwt-auth-config.js";
import passport from "passport";

import router from "./routes/index.js";
import User from "./models/user-model.js";


const tweetService=new TweetService();
const userRepository=new UserRepository();
const like=new LikeRepository();
const likeService=new LikeService();
const commentService=new CommentService();
const trendingRepo=new TrendingRepository();



const startServer=()=>{
      const app=express();

     

      app.listen(3001,async()=>{           

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use('/api',router);

           await createConnection();
        
           console.log(`Server has Started on PORT no ${PORT}`);
      
           
      })
}

startServer();
