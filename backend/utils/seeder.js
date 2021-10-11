const Product = require('../models/product');

const Employee = require('../models/employee');      // import employee tharusha

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');
const employees = require('../data/employees'); //matin

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env'})

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added');

        process.exit();

    } catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedProducts()

//tharusha
const seedEmployees = async () => {
    try{

        await Employee.deleteMany(); //delete all the e
        console.log('Employees are deleted');

        await Employee.insertMany(employees)
        console.log('All Employees are added')

        process.exit();

    }catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedEmployees()