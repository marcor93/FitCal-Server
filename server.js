const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const activityRoute = require("./routes/activity");
const authRoute = require("./routes/auth");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/activity", activityRoute);
app.use("/auth", authRoute);
//localhost:8080/test

app.listen(port, () =>
  console.log("Server is up and running 🏃 on port " + port)
);
