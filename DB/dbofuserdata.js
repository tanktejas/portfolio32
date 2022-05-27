const express = require("express");
var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://tejas:ab@cluster0.bczol.mongodb.net/Portfolio",

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("connected");
  }
);

var Schema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const db = new mongoose.model("Userdata", Schema);

module.exports = db;
