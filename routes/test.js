const express = require("express");
const router = require("express").Router();
const testController = require("../controllers/testController");

// create additional routes by copying and changin the "/" to your desired path
router.get("/", testController.getTestItem);

module.exports = router;
