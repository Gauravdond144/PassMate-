const QnaModel = require("../Models/QnaModel");

exports.getData = async (req, res) => {
  try {
    const data = await QnaModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.setData = async (req, res) => {
  try {
    const { questionData, answersData, subject, unit } = req.body;

    // Validate required fields
    if (!questionData.title || !questionData.content || !subject || !unit) {
      return res
        .status(400)
        .json({ message: "Title, content, subject, and unit are required" });
    }

    const newQna = new QnaModel({
      questionData,
      answersData,
      subject,
      unit,
    });

    // Save to database
    const savedQna = await newQna.save();
    res
      .status(201)
      .json({ message: "Question added successfully", data: savedQna });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
