const userModel = require("../../models/userModel");

const findUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findById(userId);

    res.status(201).json(user);
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { findUser };
