const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

//routes list
const index = require("./routes/front/index");
const users = require("./routes/admin/users");
// const about = require("./routes/front/aboutus");
// const contact = require("./routes/front/contactus");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.set("view engin", "ejs");

app.use("/", index);
app.use("/admin/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on port  5000"));
