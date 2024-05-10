const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtSecret = process.env.JWT_SECRET_KEY;
  if (!jwtSecret) throw new Error("JWT_SECRET_KEY is not defined");

  return jwt.sign({ _id }, jwtSecret, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { password, email, name } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json("Invalid email format");
    }

    if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json("Weak password. Use uppercase, lowercase, numbers, and symbols.");
    }

    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User with the given email already exists");
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = createToken(newUser._id);

    res.status(200).json({
      _id: newUser._id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { registerUser };
