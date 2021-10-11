const express = require('express');
const router = express.Router();

const { 
    userCount,
    feedbackCount,
    offerCount,
    orderCount,
    productCount,
    count,
    employeeCount

    


} = require('../controllers/adminDashController');


router.route('/userCount').get(userCount);
router.route('/feedbackCount').get(feedbackCount);
router.route('/offerCount').get(offerCount);
router.route('/orderCount').get(orderCount);
router.route('/productCount').get(productCount);
router.route('/employeeCount').get(employeeCount);
router.route('/count').get(count);

module.exports = router;