import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.token;
    const response = jwt.verify(token, JWT_SECRET);
    req.headers.userid = response.id;
    next();
  } catch (error) {
    return res.status(400).json({
        error: error
    })
  }

  // passport.authenticate("jwt", (err, user) => {
  //   if (err) {
  //     console.log("Erro occured");
  //     next(err);
  //   }
  //   if (!user) {
  //     return res.status(500).json({
  //       Message: "User is unauthorize hai bro",
  //     });
  //   }
  //   req.user = user;
  //   next();
  // })(req, res, next);
};

export { authenticateUser };
