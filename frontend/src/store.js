import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer, userReducer, forgotPasswordReducer, allUserReducer, userDetailsReducer } from "./reducers/userReducers";

import { productsReducer, newProductReducer, productReducer, productDetailsReducer } from './reducers/productReducers';
import { offersReducer, newOfferReducer, offerReducer, offerDetailsReducer } from './reducers/offerReducers';
import {feedbackReducers,feedbackAdminDeleteReducer, } from './reducers/feedbackReducers';
import {
    feedbackCreateReducers,
    feedbackCustomerReducers,
    feedbackCustomerDeleteReducer,
    feedbackCustomerUpdateReducer,
    SinglefeedbackCustomerReducers } from './reducers/feedbackCreateReducer'; 
import {countReducers} from './reducers/adminDashReducer';

import {
    newOrderReducer,
    myOrdersReducer, 
    allOrdersReducers ,
    adminUpdateOrdersReducers,
    orderDetailsReducer,
    orderUDReducer
} from './reducers/orderReducers'

import { cartReducer } from './reducers/cartReducer';

import { allEmployeesReducer,newEmployeeReducer,employeeReducer, employeeDetailsReducer } from './reducers/employeeReducers'//tharusha


// Thiran
import { suppliedItemReducers, changeSuppliedItemReducers, newSuppliedItemReducers, singleSuppliedItemReducers } from './reducers/suppliedItemReducers'

import { changeSupplierReducers, supplierReducers, newSupplierReducers, singleSupplierReducers } from './reducers/supplierReducers'

import { supplyReducers, changeSupplyReducers, newSupplyReducers } from './reducers/supplyReducers'
// Thiran


const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUserReducer,
    forgotPassword: forgotPasswordReducer,
    userDetails: userDetailsReducer,

    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    offers: offersReducer,
    offerDetails: offerDetailsReducer,
    newOffer: newOfferReducer,
    offer: offerReducer,

    newOrder: newOrderReducer,
    orders: allOrdersReducers,
    adminUpdateOrder: adminUpdateOrdersReducers,
    myOrders: myOrdersReducer,
    myOrderDetails: orderDetailsReducer,
    userOrderFunctions: orderUDReducer,
    cart: cartReducer,

    feedbacks: feedbackReducers,
    newFeedbacks : feedbackCreateReducers,
    adminDelete : feedbackAdminDeleteReducer,
    customerDelete: feedbackCustomerDeleteReducer,
    customerFeedback: feedbackCustomerReducers,
    updateFeedback: feedbackCustomerUpdateReducer,
    singlefeedback: SinglefeedbackCustomerReducers,

    count:countReducers,


    //tharusha
    allEmployees : allEmployeesReducer,// 19 folder
    employee :newEmployeeReducer,
    emp:employeeReducer,
    employeeDetails: employeeDetailsReducer,


    //Thiran
    supplied_items: suppliedItemReducers,
    change_supplied_items: changeSuppliedItemReducers,
    new_supplied_items: newSuppliedItemReducers,
    single_supplied_item: singleSuppliedItemReducers,

    suppliers: supplierReducers,
    change_suppliers: changeSupplierReducers,
    newSuppliers: newSupplierReducers,
    supplierDetails: singleSupplierReducers,

    supplies: supplyReducers,
    change_supplies: changeSupplyReducers,
    newSupplies: newSupplyReducers
    //Thiran

})


let initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        deliveryInfo: localStorage.getItem('deliveryInfo')
        ? JSON.parse(localStorage.getItem('deliveryInfo'))
        : {}
    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;