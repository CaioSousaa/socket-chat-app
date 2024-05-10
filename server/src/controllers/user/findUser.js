const userModel = require("../../models/userModel");

const getUsers = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(201).json(user);
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { getUsers };
