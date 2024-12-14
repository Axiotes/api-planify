const express = require("express");
const router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");

router.get("/:date", ActivitiesController.userActivities);
router.get("/:id", ActivitiesController.activity);
router.post("/new", ActivitiesController.createActivity);
router.patch("/update/:id", ActivitiesController.updateActivity);
router.delete("/delete/:id", ActivitiesController.deleteActivity);

module.exports = router;
