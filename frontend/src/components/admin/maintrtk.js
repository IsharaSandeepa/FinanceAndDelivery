import React, { Fragment,useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../style/mainrtk.css'

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import MetaData from '../layout/MetaData';

const maintrtk = () => {
    return (
        <Fragment>
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
            <MetaData title = {'All Employees'}/>
            <Fragment>
            <Header/>
                <section className="container_yo">
                    <Admin_nav/>
                </section>
  
                <section className="container55555">
                    <br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>        
           <Link to = {"/new"} > <div className =  "a_rtk" >
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add New Employee<br/>

                </div>
            </Link>    

            <Link to = {"/emplist"} > <div className = "a_rtk1">    
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View Employee List

            </div> 
            </Link>               
                
                
            
            </section>
            
    
        </Fragment>
        </Fragment>
    )
}

export default maintrtk
