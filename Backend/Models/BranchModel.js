const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
});
// branchSchema.index({ code: 1 }, { unique: true });

module.exports = mongoose.model("branch", branchSchema);
