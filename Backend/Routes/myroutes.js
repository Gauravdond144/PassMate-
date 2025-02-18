const express = require("express");
const router = express.Router();
const { getData, setData } = require("../controllers/Qcontroller");

router.get("/items", getData);

router.post("/questions", setData);

module.exports = router;
