// server.js
const express = require("express");
const cors = require("cors");
const Authrouter = require("./src/routes/Auth");
const payment = require("./src/routes/payment");
const Formrouter = require("./src/routes/user");
const database = require("./src/Database/Database");
const cookieParser = require("cookie-parser");
require("dotenv").config()

const app = express(); // Use express() directly instead of express.Router()
app.use(cookieParser())
// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, 
}));

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("hello");
});

// Routes
app.use("/", payment);
app.use("/",Authrouter)
app.use("/",Formrouter)

// Start Server
database.then(() => {
  console.log("Database is connected successfully...");
  
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}...`);
  });

}).catch((error) => {
  console.error("Something went wrong with your connection:", error.message || error);
});


