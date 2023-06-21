let mongoose = require('mongoose');

//Create Model of Employee
let employeeModel = mongoose.Schema(
    {
        "name" : String,
        "address" : String,
        "contact" : String
    },
    {
        collection: "employee"
    }
);

module.exports = mongoose.model('Employee', employeeModel);