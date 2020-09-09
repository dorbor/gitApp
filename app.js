const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.set("view engin", "ejs");

app.get("/", (req, res) => {
  res.send("app is working");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on port  500"));
