const express = require("express");
const path = require("path");
const app = express();


const expressLayouts = require("express-ejs-layouts");
const browserSync = require("browser-sync").create();
const bsConfig = require("./bs-config.js");
const { items } = require("./constants/items.js");
const { sizes } = require("./constants/sizes.js");
const { categories } = require("./constants/categories.js");

browserSync.init(bsConfig);
app.use(require("connect-browser-sync")(browserSync));

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
// product page
app.get("/products/men", (req, res) => {
  const viewsData = {
    items: items.filter(item => item.gender === "male"),
    sizes: sizes,
    categories: categories,
    headerImage: "https://bristolshoes.ph/cdn/shop/files/2_cefef713-13a0-4fb4-8c7d-4421a022fac1_2000x.progressive.png.jpg?v=1614295683"
  };
  res.render("pages/products", viewsData);
});

app.get("/products/women", (req, res) => {
  const viewsData = {
    items: items.filter(item => item.gender === "female"),
    sizes: sizes,
    categories: categories,
    headerImage: "https://bristolshoes.ph/cdn/shop/files/womensbanner_1900x.progressive.jpg?v=1613732177"
  };
  res.render("pages/products", viewsData);
});

app.get("/products", (req, res) => {
  const viewsData = {
    items: items,
    sizes: sizes,
    categories: categories,
    headerImage: ""
  };
  res.render("pages/products", viewsData);
});

app.listen(3000);
console.log("Server is running");
