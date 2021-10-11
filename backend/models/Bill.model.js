const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    CusID: { type: String, required: true },
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Billdate: { type: String, required: true },
    Billamount: { type: String, required: true },
    Bank: { type: String, required: true },
    Branch: { type: String, required: true },
    Contactno: { type: String, required: true },
    Email: { type: String, required: true },
}, {
    timestamps: true,
});

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;