const express = require("express"),
  app = express(),
  ejs = require("ejs"),
  fs = require("fs"),
  path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use((req, res, next) => {
  var year = new Date().getFullYear;
  next();
});
app.get("/", (req, res) => {
  res.render("portfolio.ejs");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs");
});
app.get("/home", (req, res) => {
  res.render("portfolio.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.listen(3000);
