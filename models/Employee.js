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
  address: String,
  email: String,
  mobile: Number,
  mobileIsVerified: {
    type: Boolean,
    default: false,
  },
  emergencyNumber: Number,
  bloodGroup: String,
  profilePic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfilePic",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
