const User = require('../models/user');
const feedback = require('../models/feedback');
const Offer = require('../models/offer');
const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const API_FEATURES = require('../utils/apiFeatures');

exports.userCount = catchAsyncErrors( async(req, res, next) => {

    const usersCount = await User.countDocuments()

    res.status(200).json({
        success: true,
        usersCount
    })
})


exports.feedbackCount = catchAsyncErrors (async(req, res, next) =>{

    const feedbacksCount = await feedback.countDocuments();

    res.status(200).json({
        success: true,
        feedbacksCount

    })
})

exports.offerCount = catchAsyncErrors(async (req, res, next) => {

    const offersCount = await Offer.countDocuments();

        res.status(200).json({
            success: true,
            offersCount,
        })
   
})

exports.orderCount = catchAsyncErrors( async(req,res,next) => {

    const apiFeatures = new API_FEATURES(Order.find().sort('-createdAt'), req.query)
        .admin_order_search()
        .filter()

    const orders = await apiFeatures.query;
    const odersCount = await Order.countDocuments();
    let totalAmount = 0;

    orders.forEach(order =>{
        totalAmount += order.totPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        odersCount

    })
})

exports.productCount = catchAsyncErrors ( async (req, res, next) => {

    const productsCount = await Product.countDocuments()


    res.status(200).json({
        success: true,
        productsCount
    })

})
exports.employeeCount = catchAsyncErrors ( async (req, res, next) => {

    const employeesCount = await Employee.countDocuments();


    res.status(200).json({
        success: true,
        employeesCount
    })

})


exports.count = catchAsyncErrors ( async (req, res, next) => {


    const usersCount = await User.countDocuments()
    const feedbacksCount = await feedback.countDocuments();
    const offersCount = await Offer.countDocuments();
    const productsCount = await Product.countDocuments()
    const apiFeatures = new API_FEATURES(Order.find().sort('-createdAt'), req.query)

        const orders = await apiFeatures.query;
        const odersCount = await Order.countDocuments();
        let totalAmount = 0;

        orders.forEach(order =>{
            totalAmount += order.totPrice
        })
        

    res.status(200).json({
        success: true,
        productsCount,
        usersCount,
        feedbacksCount,
        offersCount,
        odersCount,
        totalAmount,
        
    })

})