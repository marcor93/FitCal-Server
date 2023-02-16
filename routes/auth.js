const express = require("express");
const router = require("express").Router();
const authController = require("../controllers/authController");

// create additional routes by copying and changin the "/" to your desired path
// router.post("/", loginController.reuter);

router.post("/login", authController.sendLogin);
router.post("/signup", authController.sendSignup);

module.exports = router;
