const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); // this middleware converts all the req into json

app.post("/signup", async (req, res) => {

  console.log(req.body);
  const userObj = {
    firstName: "MS",
    lastName: "Dhoni",
    emailId: "msdhoni@gmail.com",
    password: "dhonibhai",
  };
  try {
    const user = new User(userObj);  //new instance of User Model which is imported from models
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection establised....");
    app.listen(7777, () => {
      //takes port and callback function
      console.log("Server is successfully running on 7777!");
    });
  })
  .catch((err) => console.error("Database couldn't connect!!,", err));
