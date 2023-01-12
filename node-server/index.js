const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://root:1234@localhost:27017";

mongoose.set('strictQuery', false);

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connection is made."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

  app.listen(5000, function () {
  console.log("Server listening on port 5000");
});