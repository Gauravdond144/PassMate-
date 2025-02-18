const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const myroutes = require("./Routes/myroutes");
const BranchModel = require("./Models/BranchModel");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
// async function addBranch() {
//   const newBranch = new BranchModel({
//     name: "Computer",
//     code: "cs",
//   });
//   await newBranch.save();
//   console.log("Brach Created:", newBranch);
// }
// addBranch();
// addBranch();
app.use("/api", myroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
