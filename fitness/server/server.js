const express = require("express");
const mongoose = require('./config/db.js')
const app = express();

const PORT = process.env.PORT || 3001;


app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });