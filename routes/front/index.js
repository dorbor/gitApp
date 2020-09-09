const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("app is working");
});

router.get("/about", (req, res) => {
  res.send("this is about us");
});

module.exports = router;
