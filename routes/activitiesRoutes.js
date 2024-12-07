const express = require("express");
const router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");
const checkUser = require("../middleware/checkUser");

router.post("/new_activity", checkUser, ActivitiesController.createActivity);

module.exports = router;
