import mongoose from 'mongoose';
import {MONGO_URL} from "./serverConfig.js";


const createConnection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/dummy_tweet_here')
        .then(() => console.log(`Connected! to the database ${MONGO_URL} `));
    } catch (error) {
         console.log('Error has occured',error) 
    }  
}

export default createConnection