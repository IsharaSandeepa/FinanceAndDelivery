const app = require('./app')
const connectDatabase = require('./config/database')


const dotenv = require('dotenv');
const cloudinary = require('cloudinary')


// Handle Uncaught Exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
})


//setup config 
dotenv.config({path:'backend/config/config.env'})


// database connect to the server
connectDatabase();



//cloudanary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})


// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})




//app.listen(process.env.PORT, () => {
  //  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
//})



//himasha-----------------------------------------
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 4000;

app.use(cors());
// app.use(express.json());

// const uri2 = process.env.ATLAS_URI;
// mongoose.connect(uri2, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("MongoDB database connection established successfully");
// });

const BillRouter = require("./routes/Bill");
const DeliveryRouter = require("./routes/Delivery");
const SupplierRouter = require("./routes/Supplier");
const EmployeeRouter = require("./routes/Employee copy");
const DeliveryRouterKal = require("./routes/Delivery copy");

app.use("/Bill", BillRouter);
app.use("/Delivery", DeliveryRouter);
app.use("/Supplier", SupplierRouter);
app.use("/Employee", EmployeeRouter);
app.use("/DeliveryKal", DeliveryRouterKal);

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port: ${process.env.PORT}`);
// });
//himasha end ---------------------------------------------------