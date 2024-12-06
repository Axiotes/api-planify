const express = require("express");
const router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");

router.post("/new_activity", ActivitiesController.createActivity);

module.exports = router;
