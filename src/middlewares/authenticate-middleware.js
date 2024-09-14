import passport from "passport";

const authenticateUser = (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) {
      console.log("Erro occured");
      next(err);
    }
    if (!user) {
      return res.status(500).json({
        Message: "User is unauthorize",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export { authenticateUser };
