const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
   First_Name:{
        type: String,
        required: true

   },
   Last_Name: {
        type: String,
        required: true
   },
   Address: {
        type: String   
   },
   BirthDay: {
        type: String   
   },
   Gender: {
       type: String
   },
   Email_Address: {
       type: String
   },
   Phone_Number: {
       type: String
   },
   OT_Rates: {
       type: String
   },
   Basic_Salary: {
       type: String
   },
   OT_Hours: {
    type: String,
    default: 0.0
   },
   Monthly_salary: {
    type: String,
    default: 0.0
   },

})

module.exports = mongoose.model('Employee', employeeSchema)