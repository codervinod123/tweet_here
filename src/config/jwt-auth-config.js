import passportJWT from "passport-jwt";
import User from "../models/user-model.js";

const strategy=passportJWT.Strategy;
const ExtractJWT=passportJWT.ExtractJwt;

const opts={
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_app',

}


export const passportAuth  = (passport) =>{
    try {
        passport.use(new strategy(opts, async(jwt_payload, done)=> {
            const user=await User.findById(jwt_payload.id);
            if(!user){
               done(null,false);
            }
            if(user){
              done(null,user);
            }
      }))
    } catch (error) {
       console.log('Error occured in passport');
       throw error; 
    }
} 
    