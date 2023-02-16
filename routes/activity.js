const express = require("express");
const router = require("express").Router();
const activityController = require("../controllers/activityController");

router.get("/", activityController.getActivity);
router.route("/").post(activityController.addActivity);

router.get("/:activityId", activityController.getOneActivity);
router.delete("/:activityId", activityController.deleteActivity);
router.patch("/:activityId", activityController.editActivity);

module.exports = router;
