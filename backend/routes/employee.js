const express = require('express')
const router = express.Router();


const { 
    getEmployees,
    getAdminEmployees, // 18 folder
    newEmployee, 
    getSingleEmployee,
    updateEmployee, 
    deleteEmployee } = require('../controllers/employeeController')


router.route('/employees').get(getEmployees);
router.route('/admin/employees').get(getAdminEmployees);// 18 folder
router.route('/employee/:id').get(getSingleEmployee);

router.route('/admin/employee/new').post(newEmployee);

router.route('/admin/employee/:id')
    .put(updateEmployee)
    .delete(deleteEmployee);

module.exports = router;