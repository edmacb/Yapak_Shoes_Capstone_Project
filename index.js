const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(expressLayouts);
app.set("layout", "./layouts/master");
app.use(express.static("public"));
app.set("view engine", "ejs");

// PAGES
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/shop", (req, res) => {
  res.render("pages/shop");
});

app.get("/services", (req, res) => {
  res.render("pages/services");
});

app.get("/cart", (req, res) => {
  res.render("pages/cart");
});

app.listen(5000);
console.log("Server is running");
