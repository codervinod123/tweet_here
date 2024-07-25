import passport from "passport";

const authenticateUser=(req,res,next)=>{
      console.log("Hello from Vinod");
      console.log(req)
      next();
}

export default authenticateUser;
