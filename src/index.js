const express=require('express');
const {PORT}=require('./config/serverConfig')
const {createConnection}=require('./connection/connection')

const {Tweet}=require('./models/tweet');

const startServer=()=>{
      const app=express();
      app.listen(PORT,async()=>{
           await Tweet.insertOne({content:"Hello from Here"});
          createConnection();
          console.log(`Server has Started on PORT no ${PORT}`);
      })
}

startServer();