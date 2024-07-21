import express from "express"
import bodyParser from "body-parser";
import createConnection from "./config/connection.js";
import {TweetService} from "./services/tweet-service.js";
import { PORT } from "./config/serverConfig.js";

import { UserRepository } from "./repository/user-repository.js";
import { LikeRepository } from "./repository/like-repository.js";
import { LikeService } from "./services/like-service.js";


const tweetService=new TweetService();
const userRepository=new UserRepository();
const like=new LikeRepository();
const likeService=new LikeService();


const startServer=()=>{
      const app=express();

     

      app.listen(3001,async()=>{

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));

           await createConnection();
           console.log(`Server has Started on PORT no ${PORT}`);
           await likeService.toggleModel('Tweet','669ce304c662e7a7713278b3','669ce68cc0a7ec17dbb65a20');
           //await tweetService.createTweet({content:"Hello #life is very #jaymasamay jayshreeram hard to some people #dayofcode #hustle #daysofbuilding"});
          
      })
}

startServer();
