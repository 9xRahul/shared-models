module.exports = (mongoose) => {
  const Employee =
    mongoose.models.Employee ||
    mongoose.model("Employee", require("./employeeSchema"));
  const ProfilePic =
    mongoose.models.ProfilePic ||
    mongoose.model("ProfilePic", require("./profilePicSchema"));

  return { Employee, ProfilePic };
};
