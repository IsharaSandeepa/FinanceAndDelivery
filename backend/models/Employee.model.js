const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    EmpID: { type: String, required: true },
    Empname: { type: String, required: true },
    Amount: { type: String, required: true },
    Date: { type: String, required: true },
    Contactno: { type: String, required: true },
    Email: { type: String, required: true },
}, {
    timestamps: true,
});

const Employee = mongoose.model("EmployeePay",EmployeeSchema);

module.exports = Employee;