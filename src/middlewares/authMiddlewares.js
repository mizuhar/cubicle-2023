const jwt = require("../lib/jwt");
const { secret } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (token) {
    //validate the token
    try {
      const deccodedToken = await jwt.verify(token, secret);
      req.user = deccodedToken;
      res.locals.user = deccodedToken
      res.locals.isAuthenticated = true;
       next();
    } catch (err) {
      res.clearCookie("auth");
      res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res,next) => {
  if(!req.user){
    res.redirect("/users/login");
  }
  next();
}
