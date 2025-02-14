const mongoose = require("mongoose");

const qnaschema = new mongoose.Schema({
  questionData: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    votes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  answersData: [
    {
      content: {
        type: String,
        required: true,
      },
      author: String,
      timestamp: String,
      votes: Number,
      isAccepted: Boolean,
    },
  ],
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ret: "subject",
    required: true,
  },
  unit: Number,
});
module.exports = mongoose.model("qna", qnaschema);
