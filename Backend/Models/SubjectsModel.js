const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branch",
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("subject", subjectSchema);
