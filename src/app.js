const express = require("express");

const app = express(); //instance of express js application

//request handler function takes route(optional) and CB as parameter
app.use("/test",(req,res)=>{
res.send("Namaste!!! from the test server!");
})
app.use("/hello",(req,res)=>{
   res.send("Hello hello from server hello!");
})
app.listen(7777,()=>{ //takes port and callback function
    console.log("Server is successfully running on 7777!")
});