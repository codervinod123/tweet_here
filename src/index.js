const express=require('express');
const {PORT}=require('./config/serverConfig')
const {createConnection}=require('../src/config/connection');

const TweetService=require('./services/tweet-service');
const tweetService=new TweetService();

const HashtagRepository=require('./repository/hashtag-repository');

const startServer=()=>{
      const app=express();
      app.listen(PORT,async()=>{
         
         await createConnection();

        //   const tagList=["Engg","daysofbuilding"];
        //   const reppppo=new HashtagRepository();
        //   const storedTag=await reppppo.findByName(tagList);  
        //   console.log(storedTag);

          console.log(`Server has Started on PORT no ${PORT}`);
          await tweetService.createTweet({content:"Hello life is very #jaymasamay jayshreeram hard to some people #dayofcode #hustle #daysofbuilding"});
          
      })
}

startServer();