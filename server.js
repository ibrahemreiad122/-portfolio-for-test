const express = require("express"),
  app = express(),
  ejs = require("ejs"),
  path = require("path"),
  fs = require("fs"),
  bodyParser = require("body-parser"),
  urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use((req, res, next) => {
  var time = new Date().toString();
  var url = req.url;
  fs.appendFileSync("text.txt", time + url + "\n");
  next();
});
app.get("/", (req, res) => {
  res.render("portfolio.ejs");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs");
});
app.post("/portfolio", urlencodedParser, (req, res) => {
  res.render("contact.ejs", {
    welcome: `hello ${req.body.firstName}`
  });
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
