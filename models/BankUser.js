const { Schema, model } = require("mongoose");

const BankUser = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  pancard: {
    type: String,
    required: true,
  },
  registerdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("BankUser", BankUser);
