//import './App.css';


import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AdminFooter from './components/layout/AdminFooter';


import Login from './components/user/Login';
import Register from './components/user/Register';


import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';


//Ishara OrderComponent
import MyOrders from './components/order/UserAllOrders/UserOrders'
import USOCard from './components/order/UserSingleOrder/UserSingleOrder'
import AdminAllOrders from './components/order/AdminAllOrders/AdminOrdersUI';
import AdminOrderSearch from './components/order/AdminAllOrders/AdminOrderSearch';
import AdminSingleOrderView from './components/order/AdminSingleOrderView/AdminSingleOrderView';
import UserCartUI from './components/order/UserCart/UserCart';
import OrderSummary from './components/order/OrderSummary/OrderSummary';
import orderSuccessUI from './components/order/UserOrderSuccess/orderSuccessPage';





//ankagen start
import Menu from "./components/Menu";
import ProductDetails from './components/product/ProductDetails/ProductDetails';
import AllOffers from './components/AllOffers'
import OfferDetails from './components/offer/OfferDetails';
import OfferReport from './components/report/OfferReport';

//Yohan 
import Admin_Feedback from "./components/admin/adminFeedbacks"; 
import Review from "./components/customer/Review"
import Add_Feedback from './components/customer/Add_Feedback'
import Customer_Feedback from './components/customer/customerFeedbacks'
import Update_Feedback from './components/customer/UpdateFeedback'

//ankagen end


//adminge ewa
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
import UserReport from './components/report/UserReport';
//ankagen start
// Admin Imports
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import OffersList from './components/admin/OffersList';
import NewOffer from './components/admin/NewOffer';
import UpdateOffer from './components/admin/UpdateOffer';

//anukagen end

//admin Dashboard
import adminDash from './components/admin/adminDash/adminDash';
import adminOrder from './components/admin/adminDash/adminDash';


//tharusha 
import NewEmployee from './components/admin/addemp';
import EmployeesList from './components/admin/EmployeesList';
import UpdateEmployee from './components/admin/UpdateEmployee';
import maintrtk from './components/admin/maintrtk';
import EmployeeReport from './components/report/EmployeeReport';


import ProtectedRoute from './components/route/ProtectedRoute';
import{ loadUser, updatePassword } from './actions/userActions'
import store from './store'


//Thiran
import './App.css';
// import Header from './components/layout/Header';
import { Home } from './components/inventory_manager/Home';
import { RegisterSupplier } from './components/inventory_manager/RegisterSupplier';
import  { RegisterSuppliedItem }  from './components/inventory_manager/RegisterSuppliedItem';
import { RegisterSupply } from './components/inventory_manager/RegisterSupply';
import { UpdateSuppliedItem } from './components/inventory_manager/UpdateSuppliedItem';
import { UpdateSupplier } from './components/inventory_manager/UpdateSupplier';
import { UpdateSupply } from './components/inventory_manager/UpdateSupply';
// import Footer from './components/inventory_manager/Footer';
// import Admin_nav from './components/inventory_manager/AdminNav';
import { AllSuppliedItems } from './components/inventory_manager/AllSuppliedItems'
import { AllSuppliers } from './components/inventory_manager/AllSuppliers'
import { AllSupplies } from './components/inventory_manager/AllSupplies'


//reports
import report from './components/admin/adminDash/report'
import salesReport from './components/report/salesReport'
import feedbackReport from './components/report/feedbackReport'
import AdminAllOrdersReport from './components/report/AdminOrdersReport';
import { SupplierReport } from './components/report/SupplierReport'
import { SuppliedItemReport } from './components/report/SuppliedItemReport'




//himasha------------------------------------------------------------------------------------------------------
//bill
import Billlist from "./components/Bill/Bill-list.component";
import newbill from "./components/Bill/Bill-Create.component";
import editbill from "./components/Bill/Bill-Update.component";

//delivery

import Depacre from "./components/Delivery/Delivery-Create.component";
import listdel from "./components/Delivery/Delivery-list.component";
import updatedel from "./components/Delivery/Delivery-Update.component";

//supplier

import supcre from "./components/Supplier/Supplier-Create.component";
import listsup from "./components/Supplier/Supplier-list.component";
import updatesup from "./components/Supplier/Supplier-Update.component";


//Employee

import empcre from "./components/Employee/Employee-Create.component";
import listemp from "./components/Employee/Employee-list.component";
import updateemp from "./components/Employee/Employee-Update.component";


//home
import PaymentHome from "./components/Home/Home";

//report


import Report from "./components/report/Report";
//himasha------------------------------------------------------------------------------------------------------
//kalindu
import Deliverycre from "./components/Delivery Kal/Delivery-Create.component";
import listdelivery from "./components/Delivery Kal/Delivery-list.component";
import updatedelivery from "./components/Delivery Kal/Delivery-Update.component";
import reportKal from "./components/Delivery Kal/report";
//import { Router } from 'express';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    
    //header footer and the others component implement in here
    <Router>
      <div className="App">

          {/*<div className ="container2">*/}
        
            <Route path = "/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/password/forgot" component = {ForgotPassword} exact/>
            <Route path = "/password/reset/:token" component = {NewPassword} exact/>
          
            <ProtectedRoute path = "/me" component = {Profile} exact />
            <ProtectedRoute path = "/me/update" component = {UpdateProfile} exact  />
            <ProtectedRoute path = "/password/update" component = {UpdatePassword} exact  />


            <Route path = "/admin/users" component = {UsersList} exact  />
            <Route path = "/admin/user/:id" component = {UpdateUser} exact  />
            <Route path = "/admin/report/userReport" component = {UserReport} exact  />
            

            {/* ankagen  start*/}
           
          <Route path="/" component={Menu} exact />
          <Route path="/search/:keyword" component={Menu} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/offers" component={AllOffers} exact />
          <Route path="/offer/:id" component={OfferDetails} exact />
          <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact/>
          <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact/>
          <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact/>
          <ProtectedRoute path="/admin/offers" isAdmin={true} component={OffersList} exact/>
          <ProtectedRoute path="/admin/offer" isAdmin={true} component={NewOffer} exact/>
          <ProtectedRoute path="/admin/offer/:id" isAdmin={true} component={UpdateOffer} exact/>
          <Route path="/admin/report/offerReport" component={OfferReport} exact/>
          {/* ankagen end */}


          {/* Ishara OrderComponent */}
          {/* user */}
          <ProtectedRoute path="/orders/me" component={MyOrders} exact/>
          <ProtectedRoute path="/order/:id" component={USOCard} exact/>
          <Route path="/cart" component={UserCartUI} exact/>
          <ProtectedRoute path="/confirm_order" component={OrderSummary} />
          <ProtectedRoute path = "/success" component={orderSuccessUI}/>

          {/* admin */}
          <ProtectedRoute path="/admin/orders" isAdmin={true} component={AdminAllOrders} exact/>
          <Route path="/admin/order/:id" isAdmin={true} component={AdminSingleOrderView} exact/>
          <Route path="/admin/orders/search/:keyword" isAdmin={true} component={AdminAllOrders} exact/>
          
          

          {/*Yohan */}
          <Route path = "/review" component={Review} exact/>
          <Route path = "/add_feedback/:id" component={Add_Feedback} exact/>
          <ProtectedRoute path = "/Admin_Feedback" isAdmin={true} component={Admin_Feedback} exact/>
          <Route path = "/Customer_Feedback" component={Customer_Feedback} exact/>
          <Route path = "/Update_Feedback/:id" component={Update_Feedback} exact/>



          <ProtectedRoute path="/admin/Dashboard" isAdmin={true} component={adminDash} exact/>
          <ProtectedRoute path="/admin/Admin_Order" isAdmin={true} component={adminOrder} exact/>
          
          


          {/*tharusha*/}
          <Route path ="/new"  component = {NewEmployee} exact/>
            
          <Route path ="/emplist"  component = {EmployeesList} exact/>
          <Route path ="/admin/employee/:id"  component = {UpdateEmployee} exact/>
          <Route path ="/main_emp_page"  component = {maintrtk} exact/>
          <Route path="/admin/report/employeeReport" component={EmployeeReport} exact/>





          {/* Thiran */}
          
            {/* <Header /> */}

            

            {/* Routes */}
            <Route path = "/inventory_manager_home" component={Home} exact />
            <Route path = "/register_supplied_item" component={RegisterSuppliedItem} exact />
            <Route path = "/register_supplier" component={RegisterSupplier} exact />
            <Route path = "/register_supply" component={RegisterSupply} exact />
            <Route path = "/update_supplied_item/update/:id" component={UpdateSuppliedItem} exact />
            <Route path = "/update_supplier/update/:id" component={UpdateSupplier} exact />
            <Route path = "/update_supply" component={UpdateSupply} exact />
            <Route path = "/all_supplied_items" component={AllSuppliedItems} exact />
            <Route path = "/all_suppliers" component={AllSuppliers} exact />
            {/* <Route path = "/all_suppliers/search/:keyword" component={AllSuppliers} exact /> */}
            <Route path = "/all_supplies" component={AllSupplies} exact />
            {/* <Route path = "/all_supplies/search/:keyword" component={AllSupplies} exact /> */}
            <Route path = "/all_supplied_items/:keyword" component={AllSuppliedItems} exact />
            <Route path = "/all_suppliers/:keyword2" component={AllSuppliers} exact />
            <Route path = "/all_supplies/:keyword3" component={AllSupplies} exact />
            <Route path = "/all_suppliers/after_deletion" component={AllSuppliers} exact />
            <Route path = "/supplier_report" component={SupplierReport} exact />
            <Route path = "/supplied_item_report" component={SuppliedItemReport} exact />
            
            

            {/* <Footer /> */}
          
          {/* Thiran */}

          {/*Report*/}
          <Route path = "/admin/report" component={report} exact/>
          <Route path = "/admin/report/salesReport" component={salesReport} exact/>
          <Route path = "/admin/report/FeedbackReport" component={feedbackReport} exact/>
          <Route path="/admin/orders/orderReport" isAdmin={true} component={AdminAllOrdersReport} exact/>


           {/* himasha */}
           <Route path = "/PaymentHome" exact component = { PaymentHome }/>  
        <Route path = "/listbill/" exact component = { Billlist }/> 
        <Route path = "/newbill/" exact component = { newbill }/> 
        <Route path = "/editbill/:id" exact component = { editbill }/> 
        <Route path = "/crtdel/" exact component = { Depacre }/>
        <Route path = "/dellist/" exact component = { listdel }/>
        <Route path = "/updel/:id" exact component = { updatedel }/>
        <Route path = "/supcre/" exact component = { supcre }/>
        <Route path = "/listsup/" exact component = { listsup }/>
        <Route path = "/supdate/:id" exact component = { updatesup }/>
        <Route path = "/empcre/" exact component = { empcre }/>
        <Route path = "/listemp/" exact component = { listemp }/>
        <Route path = "/empdate/:id" exact component = { updateemp }/>
        
        <Route path = "/Finacereport/" exact component = { Report }/>
        {/* himasha end */}
        {/*Kalindu*/}
        <Route path = "/crtdelKal/" exact component = { Deliverycre }/>
        <Route path = "/DeliveryList" exact component = { listdelivery }/>
        <Route path = "/updelivery/:id" exact component = { updatedelivery }/>
        <Route path = "/Deliveryreport/" exact component = { reportKal }/>


          {/* </div> */}
      </div>

    </Router>
  );
}

export default App;



