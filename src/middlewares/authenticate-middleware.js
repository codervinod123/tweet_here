import passport from "passport";
import User from "../models/user-model.js";

const authenticateUser=async(req,res,next)=>{
    // //   passport.authenticate('jwt',(err,user)=>{
    // //       if(err) next(err)
    // //       if(!user){
    // //         return {error:"User is unauthorize"};
    // //       }  
    // //       req.user=user
    // //   })
    // //   next();
    // const user=await User.findOne({email:'vinodpvp93@gmail.com'});
    // console.log(user);
    console.log("Hello from Testing the software");
    next();

};

export default authenticateUser;
