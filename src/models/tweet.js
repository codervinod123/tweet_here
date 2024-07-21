import mongoose from "mongoose";

const tweetScheme=new mongoose.Schema({
    content:{
        type:String,
        max:225,
        required:true
    },
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetScheme);
export default Tweet