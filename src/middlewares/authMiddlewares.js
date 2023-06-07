const jwt = require("../lib/jwt");
const { secret } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (token) {
    //validate the token
    try {
      const user = await jwt.verify(token, secret);
      req.user = user;
       next();
    } catch (err) {
      res.clearCookie("auth");
       res.redirect("/users/login");
    }
  } else {
    next();
  }

 
};
