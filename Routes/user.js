const express = require("express");
const users = require("../users.js");
const userRouter = express.Router();

userRouter.get("/", function (req, res) {
  const d = new Date();
  let hour = d.getHours();
  if (hour >= 9 && hour <= 17) {
    res.render("work");
  } else {
    res.render("nowork");
  }
});

module.exports = userRouter;
