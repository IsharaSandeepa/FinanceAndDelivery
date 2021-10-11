
import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

import '../style/admin_nav.css'
//import '../script/admin_nav'
import '../style/home.css'
import {Helmet} from "react-helmet";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faUserSecret,
    faThLarge,
    faBars,
    faUser,
    faUserTie,
    faTruckMoving,
    faFileInvoice,
    faWarehouse,
    faCommentDots,
    faStickyNote,
    faPrint,
    faSignOutAlt,
    faArrowRight,
    faCannabis
                } from '@fortawesome/free-solid-svg-icons';

import { faOpera} from '@fortawesome/free-brands-svg-icons';

const Admin_nav = () => {
    return (
        <Fragment>
            
            <Helmet>
                <script src="/scripts/admin_nav.js"></script>
                <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
            </Helmet>
            <div className="sidebar">
            <div className="logoDetails">
                <div className="admin_logo">

                <div className="logo_name">Cupcakes & Cakery</div>
            </div>
            
                    
            <i className="fas fa-arrow-right" id="btn" onClick="function()"></i></div>
            
            <ul className="nav_links">
                <li>
                    <a href="/admin/Dashboard">
                    <div className="i">
                    <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon></div>
                 
                    <span className="link_name">DashBoard</span>
                    </a>
                <span className="tooltips">Dashboard</span>
                </li>
                <li>
                    <a href="/admin/orders">
                    <div className="i">
                    <FontAwesomeIcon icon={faOpera}></FontAwesomeIcon></div>
                
                    <span className="link_name">Orders</span>
                    </a>
                   <span className="tooltips">Oders</span>
                </li>
                <li>
                    <a href="/admin/products">
                    <div className="i">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>
              
                    <span className="link_name">Menu</span>
                    </a>
                    <span className="tooltips">Menu</span>
                </li>
                <li>
                    <a href="/admin/offers">
                    <div className="i">
                    <FontAwesomeIcon icon={faCannabis}></FontAwesomeIcon></div>
              
                    <span className="link_name">Offers</span>
                    </a>
                    <span className="tooltips">Offers</span>
                </li>
                <li>
                    <a href="/admin/users">
                    <div className="i">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
               
                    <span className="link_name">Customer</span>
                    </a>
                    <span className="tooltips">Customer</span>
                </li>
                <li>
                    <a href="/main_emp_page">
                    <div className="i">
                    <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></div>
                
                    <span className="link_name">Employee</span>
                    </a>
                    <span className="tooltips">Employee</span>
                </li>
                <li>
                    <a href="/DeliveryList">
                    <div className="i">
                    <FontAwesomeIcon icon={faTruckMoving}></FontAwesomeIcon></div>
              
                    <span className="link_name">Delivery Management</span>
                    </a>
                    <span className="tooltips">Delivery Management</span>
                </li>
                <li>
                    <a href="/PaymentHome">
                    <div className="i">
                    <FontAwesomeIcon icon={faFileInvoice}></FontAwesomeIcon></div>
              
                    <span className="link_name">Finance Handling</span>
                    </a>
                    <span className="tooltips">Finance Handling</span>
                </li>
                <li>
                    <a href="/inventory_manager_home">
                    <div className="i">
                    <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon></div>
               
                    <span className="link_name">Inventory Management</span>
                    </a>
                    <span className="tooltips">Inventory Management</span>
                </li>
                <li>
                    <a href={`/Admin_Feedback`}>
                    <div className="i">
                    <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon></div>
               
                    <span className="link_name">Feedbacks</span>
                    </a>
                    <span className="tooltips">Feedbacks</span>
                </li>
                
                <li>
                    <a href="/admin/report">
                    <div className="i">
                    <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></div>
               
                    <span className="link_name">Report Generate</span>
                    </a>
                    <span className="tooltips">Report Generate</span>
                </li>
                
            </ul>
        </div>
        
        
        </Fragment>
    )
}

export default Admin_nav