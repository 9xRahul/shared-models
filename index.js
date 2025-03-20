const Employee = require("./models/Employee"); // Check if path is correct
const ProfilePic = require("./models/ProfilePic");

console.log("Exporting Models:", { Employee, ProfilePic }); // Debugging log

module.exports = { Employee, ProfilePic };
