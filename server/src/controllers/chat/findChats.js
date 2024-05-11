const chatModel = require("../../models/chatModels");

const findChats = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chat = await chatModel.find({
      members: { $all: [firstId, secondId] },
    });

    res.status(201).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = findChats;
