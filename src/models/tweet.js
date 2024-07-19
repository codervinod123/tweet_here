const mongoose=require('mongoose');

const tweetScheme=new mongoose.Schema({
    content:{
        type:String,
        max:225,
        required:true
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetScheme);
module.exports=Tweet