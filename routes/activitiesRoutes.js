const express = require("express");
const router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");

router.post("/new", ActivitiesController.createActivity);
router.patch("/update/:id", ActivitiesController.updateActivity);

module.exports = router;
