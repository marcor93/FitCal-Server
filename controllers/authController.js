const knex = require("knex")(require("../knexfile"));
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const mykey =
  "54beee6dafe9dc33640297d32324d2ac7b2697e89d1de760b5ebe78b00a3a755";

const users = {};

const sendSignup = (req, res) => {
  const { username, password } = req.body;
  users[username] = {
    password,
  };
  console.log("from signup", users);
  res.json({ success: "true" });
};

// A Basic Login end point
const sendLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  console.log("the body", req.body);
  console.log("the users", users);
  if (user && user.password === password) {
    const token = jwt.sign({ username: users.username }, mykey);
    console.log("the user from resp", user.username);
    res.json({ token });
  } else {
    res.json("Try Again!");
  }
};

module.exports = { sendLogin, sendSignup };
