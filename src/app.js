const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); // this middleware converts all the req into json

//Add new user to DB
app.post("/signup", async (req, res) => {
  console.log(req.body); //check in postman
  try {
    const user = new User(req.body); //new instance of User Model which is imported from models
    await user.save();
    res.send("User Added Successfully to DB!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//Get user to UI/Postman from DB by emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log("User EmailID received:", userEmail);
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found!");
    } else {
      res.send(users); //getting response in postman after adding emailId in body-json section
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

// Get all the usrs
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("User not found!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// delete th user by _id. use http://localhost:7777/user?userId=687109084461b079e58c85c7 in postman to execute
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    await User.findByIdAndDelete({ _id: userId });
    res.send("User is deleted sucessfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//update data of the user using _id
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const data = req.body;
  console.log(data);
  try {
    await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong " + err.message);
  }
});

/**app.patch("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log(userEmail);
  const userData = { ...req.body };
  console.log(userData);
  delete userData._id;
  try {
    await User.findOneAndUpdate({ emailId: userEmail }, userData);
    res.send("User updated successfully via emailId");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});**/

connectDB()
  .then(() => {
    console.log("Database connection establised....");
    app.listen(7777, () => {
      //takes port and callback function
      console.log("Server is successfully running on 7777!");
    });
  })
  .catch((err) => console.error("Database couldn't connect!!,", err));
