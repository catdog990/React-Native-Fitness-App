const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const app = express();

const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/NativeFitness",
  {

  }
);



app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });