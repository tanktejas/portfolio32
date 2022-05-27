const express = require("express");

const app = express();

const db = require("./DB/dbofuserdata");

app.get("/", (req, res) => {
  res.send("API is Working..");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/data", (req, res) => {
  console.log(req.body);
  const u_obj = new db(req.body);
  u_obj.save();
  res.redirect("https://www.google.com/");
});

app.listen(process.env.PORT || 3004, () => {
  console.log("Success!!");
});
