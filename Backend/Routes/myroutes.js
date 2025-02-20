const express = require("express");
const router = express.Router();
const { getData, setData } = require("../controllers/Qcontroller");
const { getSubjects } = require("../controllers/SubjectController");

router.get("/items", getData);

router.post("/questions", setData);
router.get("/subjects", getSubjects);

module.exports = router;
