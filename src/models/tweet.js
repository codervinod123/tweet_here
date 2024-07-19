const mongoose=require('mongoose');

const tweetScheme=new mongoose.Schema({
    content:{
        type:String,
        length:225,
        reqyured:true
    }
})

const Tweet=mongoose.model('Tweet',tweetScheme);
module.exports={
    Tweet
}