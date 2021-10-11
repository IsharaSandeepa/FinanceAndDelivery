const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    
    rating: {
        type:Number,
        required:[true, 'Please Give Rate']

    },
  
    description:{
        type:String,
        required:[true, 'Enter Description'],
    },
    
    userId:{
        type:String,
        required:[true, 'UserId'],
    },
    orderId:{
        type:String,
        required:[true, 'OrderId'],
    },

    name:{
        type:String,
        required:[true, 'Name'],

    },
    /*
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],*/

    createdAt:{
        type:Date,
        default:Date.now
    }


})


module.exports = mongoose.model('feedback', feedbackSchema);