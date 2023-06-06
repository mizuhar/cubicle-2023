const User = require("../models/User");
const bcrypt = require("bcrypt");

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
  return user;
};
