const express=require('express');
const {PORT}=require('./config/serverConfig')
const {createConnection}=require('../src/config/connection');

const TweetRepository=require('./repository/tweet-repository');
const tweetRepo=new TweetRepository();

const startServer=()=>{
      const app=express();
      app.listen(PORT,async()=>{
          createConnection();
          await tweetRepo.createTweet({content:"Hello from Here #vinod #is #cerating tweet"});
          console.log(`Server has Started on PORT no ${PORT}`);
      })
}

startServer();