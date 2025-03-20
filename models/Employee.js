const { number } = require("joi");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  authId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  mobileIsVerified: {
    type: Boolean,
    default: false,
  },
  emergencyNumber: {
    type: Number,
  },
  bloodGroup: {
    type: String,
  },
  profilePic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfilePic",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
