const express = require("express");
const router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");

router.get("/date/:date", ActivitiesController.userActivities);
router.get("/:id", ActivitiesController.activity);
router.post("/new", ActivitiesController.createActivity);
router.patch("/update/:id", ActivitiesController.updateActivity);
router.patch("/done/:id", ActivitiesController.doneActivity);
router.delete("/delete/:id", ActivitiesController.deleteActivity);

module.exports = router;
