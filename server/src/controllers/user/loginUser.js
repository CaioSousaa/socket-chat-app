const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtSecret = process.env.JWT_SECRET_KEY;
  if (!jwtSecret) throw new Error("JWT_SECRET_KEY is not defined");

  return jwt.sign({ _id }, jwtSecret, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let existingUser = await userModel.findOne({ email });

    if (!existingUser) return res.status(400).json("Invalid email or password");

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword)
      return res.status(400).json("Invalid email or password");

    const token = createToken(existingUser._id);

    res.status(200).json({
      _id: existingUser._id,
      name: existingUser.name,
      email,
      token,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { loginUser };
