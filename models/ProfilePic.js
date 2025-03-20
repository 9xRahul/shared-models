const mongoose = require("mongoose");

const profilePicSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
      required: true,
    },
    orignalName: {
      type: String,
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
  },
  { timestamps: true }
);

const ProfilePic = mongoose.model("ProfilePic", profilePicSchema);

module.exports = ProfilePic;
