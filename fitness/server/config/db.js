const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/NativeFitness",
  {

  }
);

const UserSeed = [
    {
    Username: 'Osman',
    Password: "derp"
    }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
