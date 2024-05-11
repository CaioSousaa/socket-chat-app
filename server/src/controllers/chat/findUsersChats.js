const chatModel = require("../../models/chatModels");

const findUsersChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await chatModel.find({
      members: { $in: [userId] },
    });

    res.status(201).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = findUsersChats;
