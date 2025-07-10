const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://srushtid7:VQhc4y9gjnHBJVmu@srushmongodb.ojdjtg9.mongodb.net/devTinder"
  );
};

module.exports = connectDB;