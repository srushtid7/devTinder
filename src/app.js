const express = require("express");

const app = express(); //instance of express js application

app.use("/", (req, res, next) => {
  console.log("handling first route handler");
  //res.send("Handling / route");
  next();
}),
  app.get(
    "/user",
    (req, res,next) => {
      console.log("handling user route");
      res.send("0th round handler"); //route handler
      next();
    },
    (req, res) => {
      res.send("1st round handler"); // one middleware
    },
    (req, res) => {
      res.send("2nd round handler"); //another middleware
    }
  );

app.listen(7777, () => {
  //takes port and callback function
  console.log("Server is successfully running on 7777!");
});
