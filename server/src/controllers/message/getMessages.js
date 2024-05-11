const messageModel = require("../../models/messageModel");

const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await messageModel.findOne({ chatId });

    res.status(201).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
