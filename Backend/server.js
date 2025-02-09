const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const myroutes = require("./Routes/myroutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use(myroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
