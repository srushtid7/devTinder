const express = require("express");

const app = express(); //instance of express js application

//request handler function takes route(optional) and CB as parameter

// .use will match all the HTTP method API calls to /test
app.use("/user", (req, res,next) => {
  console.log("handling first route handler");
   next();
  
},
[(req,res,next)=>{
  console.log("handling second route");
  //res.send("response 2!");
  next();
},
(req,res,next)=>{
  console.log("handling third route");
  //res.send("response 3!");
  next();
}],
(req,res,next)=>{
  console.log("handling fourth route");
 // res.send("response 4!");
  next();
},
(req,res,next)=>{
  console.log("handling fifth route");
 res.send("response 5!");
});


app.listen(7777, () => {
  //takes port and callback function
  console.log("Server is successfully running on 7777!");
});
