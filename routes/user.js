const BankUser = require("../models/BankUser");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello ,Hi there");
});

router.post("/", async (req, res) => {
  const { name, email, password, confirmpassword, phone, pancard } = req.body;
  try {
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
