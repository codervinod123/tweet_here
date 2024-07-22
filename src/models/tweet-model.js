import mongoose from "mongoose";

const tweetScheme=new mongoose.Schema({
    content:{
        type:String,
        max:225,
        required:true
    },
    likes:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Like'
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment' 
        }
    ]
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetScheme);
export default Tweet