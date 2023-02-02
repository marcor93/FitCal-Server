const express = require("express");
const port = 8080;
const app = express();
const testRoute = require("./routes/test");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// replacae below with real routes
app.use("/test", testRoute);
//localhost:8080/test

app.listen(port, () =>
  console.log("Server is up and running 🏃 on port " + port)
);
