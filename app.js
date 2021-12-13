const express = require("express");

const app = express();

//untuk route dimulai dengan /add-product
app.use("/add-product", (req, res, next) => {
  console.log("in another middleware!");
  res.send('<h1>The "Add Product" Page</h1>');
});

//untuk route dimulai dengan /
app.use("/", (req, res, next) => {
  console.log("in another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
