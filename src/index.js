import express from "express"
import bodyParser from "body-parser";
import createConnection from "./config/connection.js";
import {TweetService} from "./services/tweet-service.js";
import { PORT } from "./config/serverConfig.js";

import { UserRepository } from "./repository/user-repository.js";
import { LikeRepository } from "./repository/like-repository.js";
import { LikeService } from "./services/like-service.js";
import { CommentService } from "./services/comment-service.js";

import router from "./routes/index.js";


const tweetService=new TweetService();
const userRepository=new UserRepository();
const like=new LikeRepository();
const likeService=new LikeService();
const commentService=new CommentService();



const startServer=()=>{
      const app=express();

     

      app.listen(3001,async()=>{

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));
  
            app.use('/api',router);
           await createConnection();
           console.log(`Server has Started on PORT no ${PORT}`);

      //      await commentService.toggleModel('Comment','669deb08b391d86da4a0ad1e','669ce4bd76fcd3075adf136d','This is testing comment on comment 6');
      //      await likeService.toggleModel('Tweet','669cc8e0edcb2c88e054ede8','669ce68cc0a7ec17dbb65a20');
      //      await tweetService.createTweet({content:"Hello #life is very #jaymasamay jayshreeram hard to some people #dayofcode #hustle #daysofbuilding"});
          
      })
}

startServer();
