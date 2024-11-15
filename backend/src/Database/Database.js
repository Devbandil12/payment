const mongoose = require('mongoose');
require("dotenv").config();

const database = mongoose.connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

module.exports = database;
