const userModel = require("../models/userModel");
const bcypt = require("bcrypt");
const validator = require("validator");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user) return res.status(400).json("user already exist");

  if (!name || !password || email)
    return res.status(400).json("all fields must be filled in");

  if (!validator.isEmail(email))
    return res.status(400).json("email must be a valid format");

  if (!validator.isStrongPassword(password))
    return res.status(400).json("password must be a strong");

  user = new userModel({ name, password, email });

  const salt = await bcypt.genSalt(8);

  user.password = await bcypt.hash(user.password, salt);

  await user.save();
};

module.exports = registerUser;
