import React, { Fragment } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'
import { Link } from "react-router-dom"
import '../style/mainrtk.css'

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

import all_suppliers from "./AllSuppliers"
import all_supplies from "./AllSupplies"

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'


export const Home = () => {
    return (
        <Fragment>

            {/* <sector>

            <div className="thiran_parallax1">
                <button> Inventory Management Home </button>
                <button> Register Supplier </button>
            </div>
            <div className="thiran_parallax2">
                <button> Order Management Home </button>
                <button> Place Order </button>
            </div>
            <div className="thiran_parallax3">
                <button> User Management Home </button>
                <button> Register User </button>
            </div>

            </sector> 
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <span>
            <div class="supplier_home_container">
                <div class="supplier_home_content">
                    <p>
                    Register new suppliers or view all registered suppliers
                    </p>
                    <div class="supplier_button_body">
                        <button class="f1">
                            <button class="supplier_button-os a1">
                                <a href="#">Register</a>
                            </button>
                        </button>
                        <button class="f1">
                            <button class="supplier_button-os a1">
                                <a href="#">View All</a>
                            </button>
                        </button>
                    </div>
                </div>
                <div class="supplier_home_flap"></div>
            </div>

            <div class="suppliedItem_home_container">
                <div class="suppliedItem_home_content">
                    <p>
                    Register new suppliers or view all registered suppliers
                    </p>
                    <div class="suppliedItem_button_body">
                        <button class="f1">
                            <button class="suppliedItem_button-os a1">
                                <a href="#">Register</a>
                            </button>
                        </button>
                        <button class="f1">
                            <button class="suppliedItem_button-os a1">
                                <a href="#">View All</a>
                            </button>
                        </button>
                    </div>
                </div>
                <div class="suppliedItem_home_flap"></div>
            </div>
            </span>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}
            <MetaData title ={'Admin Feedbacks'}/>
            <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                                    />
                                    <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                                />
                                    <link
                                    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
                                    rel="stylesheet"
                                    type="text/css"
                                   /> 
            <Fragment>
                <Header/>
                <section className="container_yo">
                    <Admin_nav/>
                </section>
  
                <section className="container55555">
                <h1>Inventory Management</h1>
                <br/><br/><br/><br/>

                <Link to = {"/register_supplied_item"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register Supplied Item<br/>

                </div>
            </Link>
            <Link to = {"all_supplied_items"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View Supplied Item<br/>

                </div>
            </Link><br/><br/><br/><br/>
            <Link to = {"/register_supplier"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register Supplier<br/>

                </div>
            </Link>
            <Link to = {"/all_suppliers"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View Supplier<br/>

                </div>
            </Link><br/><br/><br/><br/>
            <Link to = {"/register_supply"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register Supply<br/>

                </div>
            </Link>
            <Link to = {"/all_supplies"} > <div className =  "a_rtk" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View Supply<br/>

                </div>
            </Link><br/><br/>
               

                </section>
                </Fragment>
        </Fragment>
    )
}