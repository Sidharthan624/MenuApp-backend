const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const menuRoutes = require("./routes/menuRoutes");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();

const app = express();




app.use(
  cors({
    origin: "https://menu-app-frontend-psi.vercel.app",  
    methods: "GET,POST,PUT,DELETE",  
    allowedHeaders: "Content-Type,Authorization",
  })
);


app.use(bodyParser.json());
app.use("/api", menuRoutes);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed:", error));

module.exports = app;
