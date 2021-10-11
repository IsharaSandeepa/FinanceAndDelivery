const Employee = require('../models/employee')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const employee = require('../models/employee');
const APIFeatures = require ('../utils/apiFeatures')

//create new employee => /api/v1/admin/employee/new
exports.newEmployee = catchAsyncErrors(async (req, res, next) => {
    

    const employee = await Employee.create(req.body);

    res.status(201).json({
        success: true,
        employee
    })
})

//get all products = > api/v1/employees
exports.getEmployees = catchAsyncErrors(async(req, res, next) => {

    const employeesCount = await Employee.countDocuments();

  const apiFeatures = new APIFeatures(Employee.find(), req.query)
                    .emp_search()

   const employees = await apiFeatures.query;

    res.status(200).json({
        success: true,
        //count: employees.length,
        employeesCount,
        employees
    })
})

//18 folder
//get all products (admin)= > api/v1/admin/employees
exports.getAdminEmployees = catchAsyncErrors(async(req, res, next) => {

  

   const employees = await Employee.find();

    res.status(200).json({
        success: true,
        //count: employees.length,
       // employeesCount,
        employees
    })
})

//get single employee details => /api/v1/employee/:id

exports.getSingleEmployee = async (req, res, next) =>{

    const employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not Found'
        })
    }

    res.status(200).json({
        success: true,
        employee
    })
}

//update employee => /api/v1/admin/employee/:id
exports.updateEmployee = async (req,res, next) =>{
   
    let employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        })
    }
    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators: true,
        useFindandmodify: false
    });

    res.status(200).json({
        success: true,
        employee
    })

}

//delete employee => /api/v1/admin/employee/:id

exports.deleteEmployee = async (req, res, next) =>{

    const employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not Found'
        })
    }
    await employee.remove();

    res.status(200).json({
        success: true,
        message: 'Employee is deleted.'
    })
}