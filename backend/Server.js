// server.js
const express = require("express");
const payment = require("./src/routes/payment");
const cors = require("cors");

const app = express(); // Use express() directly instead of express.Router()

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

// Start Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
