const QuestionModel = require("../Models/QuestionModel");

exports.getData = async (req, res) => {
  try {
    const data = await QuestionModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
