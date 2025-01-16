const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const userRoutes = require("./Routes/userRoutes");


mongoose.connect("mongodb://localhost:27017/shoppyGlobe");
const db = mongoose.connection;
db.on("open", ()=>{
    console.log("connection to products db successful");
})

db.on("error", ()=>{
    console.log("connection to products db not successful");
})

const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes);

app.listen(3000, () =>
  console.log(`Server running on port 3000`)
);

