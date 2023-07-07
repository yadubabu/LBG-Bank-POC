const express = require("express");
const mongoose = require("mongoose");
const db = require("./dbConnect");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const BankUser = require("./models/BankUser");

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
// const user = require("./routes/user");
mongoose
  .connect(db)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

app.use("/", async (req, res) => {
  res.send("Hello World");
});
app.use("/api/user", require("./routes/user"));

app.listen(8000, () => {
  console.log("Server is Running on 8000");
});
