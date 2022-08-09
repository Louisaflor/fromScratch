const express = require("express");
const path = require("path");
const app = express();
const router = require("./router");

//middleware
app.use(express.json());

// app.get("/hi", (req, res) => {
//   console.log("WORKED FROM THE REACT NATIVE");
//   res.send("Hello from the server!");
// });

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
