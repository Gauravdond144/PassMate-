const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/Qcontroller");

router.get("/data", getData);

module.exports = router;
