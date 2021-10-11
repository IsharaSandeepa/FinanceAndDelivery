const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    Fisrtname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Address: { type: String, required: true },
    Birthday: { type: String, required: true },
    Gender: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Delivery = mongoose.model("DeliveryPerson",DeliverySchema);

module.exports = Delivery;