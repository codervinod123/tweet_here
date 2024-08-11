import mongoose from "mongoose";

const tweetScheme=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[225,"Length Can not be more thn 250 char"]
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