const express = require("express");

const app = express(); //instance of express js application
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.get("/user", userAuth, (req, res) => {
  res.send("User data sent!"); //admin middleware will not count for /user
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted!");
});

app.listen(7777, () => {
  //takes port and callback function
  console.log("Server is successfully running on 7777!");
});
