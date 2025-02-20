const subjectsModel = require("../Models/SubjectsModel");

exports.getSubjects = async (req, res) => {
  try {
    const data = await subjectsModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
