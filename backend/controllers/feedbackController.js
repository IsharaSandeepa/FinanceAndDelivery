
const feedback = require('../models/feedback');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const API_FEATURES = require('../utils/apiFeatures');


const cloudinary = require('cloudinary')



// create new feedback  -> /api/v1/feedback/new
exports.newFeedback = catchAsyncErrors (async(req,res,next) => {

    const{
        rating,
        description,
        name,
        //email
        orderId


    } = req.body;
    
    const createFeedback = await feedback.create({
        userId:req.user._id,
        rating, 
        description,
        name,
        orderId
        
    })
    
    res.status(201).json({
        success: true,
        createFeedback
    })
})

// get all  the feedback from databse -> /api/v1/feedback
exports.getFeedbacks = catchAsyncErrors (async(req, res, next) =>{



    const resFeedbacksPerPage = 10;

    const feedbacksCount = await feedback.countDocuments();

    const apiFeatures = new API_FEATURES(feedback.find().sort('-createdAt'), req.query)
        .pagination(resFeedbacksPerPage)

    const feedbacks = await apiFeatures.query;

    
    res.status(200).json({
        success: true,
        feedbacksCount,
        resFeedbacksPerPage,
        feedbacks
    })
})


//get specific feedback by id -> /api/v1/feedback/:id
exports.getSingleFeedback = catchAsyncErrors (async(req, res, next) =>{


    const singlefeedback = await feedback.findById(req.params.id)

    if(!singlefeedback){
        return next(new ErrorHandler('Feedback not Found', 404));
    }

    res.status(201).json({
        success: true,
        singlefeedback
    })
})






//update Feedback -> /api/v1/feedback/:id

exports.updateFeedback = catchAsyncErrors (async ( req, res, next) => {

    let update_feedback = await feedback.findById(req.params.id);

    if(!update_feedback){
        return next(new ErrorHandler('Feedback not Found', 404));
    }
   
    update_feedback = await feedback.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success:true,
        update_feedback
    })
})



// Delete Feedback /api/v1/feedback/:id
exports.deleteFeedback = catchAsyncErrors (async (req ,res,next) => {
    const delete_feedback = await feedback.findById(req.params.id);

    if(!delete_feedback){
        return next(new ErrorHandler('Feedback not Found', 404));
    }

    await delete_feedback.remove();

    res.status(200).json({
        success: true,
        message: 'Feedback is deleted.',
            
    })
})


// Admin Delete Feedback /api/v1/admin/feedback/:id
exports.adminDeleteFeedback = catchAsyncErrors (async (req ,res,next) => {

    const adminDelete_feedback = await feedback.findById(req.params.id);

    if(!adminDelete_feedback){
        return next(new ErrorHandler('Feedback not Found', 404));
    }

    await adminDelete_feedback.remove();

    res.status(200).json({
        success: true,
        message: 'Feedback is deleted.',
            
    })
})


exports.getAdminFeedbacks = catchAsyncErrors (async(req, res, next) =>{

    const feedbackCount = await feedback.countDocuments();

    const feedbackAdmin = await feedback.find().sort('-createdAt');

 

    res.status(200).json({
        success: true,
        feedbackAdmin,
        feedbackCount
    })
})

//get customers allFeedbacks  {user: req.user.id}

exports.getCustomerFeedbacks = catchAsyncErrors (async(req, res, next) =>{
    const apiFeatures = new API_FEATURES(feedback.find({userId:req.user._id}).sort('-createdAt'), req.query)

    const customerFeedback = await apiFeatures.query;

    res.status(200).json({
        success: true,
        customerFeedback
    })
})




