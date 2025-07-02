const express = require("express");

const app = express(); //instance of express js application

//request handler function takes route(optional) and CB as parameter
// app.use("/user",(req,res)=>{
//   res.send("HAHAHAHAH");
// }); // this will get priority as the order matters

app.get("/user", (req, res) => {
  res.send({ firstName: "Srushti", lastName: "Bhoyar" });
}); //this will only handle GET call to /user

app.post("/user",(req,res)=>{
  //saving data to DB
  res.send("Data saved to DB!");
});

app.put("/user",(req,res)=>{
  //saving data to DB
  res.send("Data PUT to DB!");
});

app.patch("/user",(req,res)=>{
  //saving data to DB
  res.send("Data pacthed to DB!");
});

app.delete("/user",(req,res)=>{
  res.send("Deleted successfully");
});

// .use will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Namaste!!! from the test!");
});

//the below order of routes is very important. /hello,/hello/2,/xyz
// app.use("/hello/2",(req,res)=>{
// res.send("HELLO 2");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello hello from server hello!");
// });

// app.use("/", (req, res) => {
//   res.send("Namaste!!! Srushti!");
// });

app.listen(7777, () => {
  //takes port and callback function
  console.log("Server is successfully running on 7777!");
});
