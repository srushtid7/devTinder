const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "Vir123@gmail.com",
    password: "Virat@123",
  };
  try {
    const user = new User(userObj);
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
