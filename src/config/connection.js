const mongoose=require('mongoose');
const {MONGO_URL}=require('./serverConfig');

const createConnection=async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        .then(() => console.log(`Connected! to the ${MONGO_URL}`));
    } catch (error) {
         console.log('Error has occured',error) 
    }  
}

module.exports={
    createConnection
};