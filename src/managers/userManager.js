const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const {secret} = require('../config/config');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
  const user = await User.findOne({username});
  if (!user) {
    throw new Error("User or password not valid");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("User or password not valid");
  }
  const payload = {
    _id: user._id,
    username: user.username,

  };
  const token = await jwt.sign(payload,secret,{expiresIn:'2d'})
  return token;
};
