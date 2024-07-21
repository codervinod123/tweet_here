import express from "express"
import createConnection from "./config/connection.js";
import {TweetService} from "./services/tweet-service.js";
import { PORT } from "./config/serverConfig.js";
import Tweet from "./models/tweet.js";


const tweetService=new TweetService();


const startServer=()=>{
      const app=express();
      app.listen(3001,async()=>{
         
           await createConnection();
           console.log(`Server has Started on PORT no ${PORT}`);
           await tweetService.createTweet({content:"Hello #life is very #jaymasamay jayshreeram hard to some people #dayofcode #hustle #daysofbuilding"});
          
      })
}

startServer();
