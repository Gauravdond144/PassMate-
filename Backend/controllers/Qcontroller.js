const QnaModel = require("../Models/QnaModel");

exports.getData = async (req, res) => {
  try {
    const data = await QnaModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
