const express = require("express");
const path = require("path");
const connectMongoDB = require("../src/config/mongodb");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use("/books", bookRoutes);
app.get("/", (req, res) => res.redirect("/books"));

connectMongoDB();
app.listen(3000, () =>
  console.log("Server is runing on: http://localhost:3000/books"),
);
