const express = require("express");
const app = express();
const routes = require("./routes/user.route");
const cors = require("cors");
const port = 4000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use("/", routes);

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("connection established to db");
  })
  .catch((error) => {
    console.log("connection error", error);
  });

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
