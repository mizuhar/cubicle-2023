const jwt = require("../lib/jwt");
const { secret } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (token) {
    //validate the token
    try {
      const deccodedToken = await jwt.verify(token, secret);
      req.user = deccodedToken;
       next();
    } catch (err) {
      res.clearCookie("auth");
       res.redirect("/users/login");
    }
  } else {
    next();
  }

 
};
