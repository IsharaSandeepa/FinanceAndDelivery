const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();

const { 
    newFeedback,
    getFeedbacks, 
    getSingleFeedback, 
    updateFeedback, 
    deleteFeedback,
    adminDeleteFeedback,
    getCustomerFeedbacks,
    getAdminFeedbacks
} = require('../controllers/feedbackController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')
//Display Feedbacks
router.route('/feedbacks').get(getFeedbacks);

//by Customer
router.route('/feedbacks/:id').get(getSingleFeedback);



router.route('/feedback/me').get(isAuthenticatedUser,getCustomerFeedbacks);

router.route('/newFeedbacks').post(isAuthenticatedUser,newFeedback);

router.route('/feedbackUpdate/:id').put(isAuthenticatedUser,updateFeedback);
router.route('/feedbackDelete/:id').delete(isAuthenticatedUser,deleteFeedback);

//by Admin
router.route('/admin/feedbacks/:id').delete(adminDeleteFeedback);
router.route('/admin/feedbacks').get(getAdminFeedbacks);

module.exports = router; 
