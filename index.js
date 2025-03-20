const Employee = require("./employee"); // Check if path is correct
const ProfilePic = require("./profilePic");

console.log("Exporting Models:", { Employee, ProfilePic }); // Debugging log

module.exports = { Employee, ProfilePic };
