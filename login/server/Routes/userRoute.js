const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const User = require("../Models/User");

routes.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).send("Saved To DataBase !!!");
  } catch (error) {
    console.log("Some Error Occured !!!");
  }
});

module.exports = routes;
