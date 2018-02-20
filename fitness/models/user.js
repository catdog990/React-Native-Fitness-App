const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserAuth = new Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
});

const User = mongoose.model("User", UserAuth);

module.exports = User;
