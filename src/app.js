const express = require("express");

const app = express(); //instance of express js application
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.get("/user", userAuth, (req, res) => {
  res.send("User data sent!"); //admin middleware will not count for /user
});
app.get("/admin/getAllData", (req, res) => {
  throw new Error("djshfg");
  res.send("All data sent!");
});

app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("something went wrong");
  }
})
app.listen(7777, () => {
  //takes port and callback function
  console.log("Server is successfully running on 7777!");
});
