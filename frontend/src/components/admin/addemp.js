import React, { Fragment,useState, useEffect } from 'react'
import { Link } from "react-router-dom"


import MetaData from '../layout/MetaData'

import '../style/addemp.css'
import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";



import { useAlert } from 'react-alert'
import {  useDispatch , useSelector } from 'react-redux'
import {  newEmployee,clearErrors, } from '../../actions/employeeActions'
//import { NEW_EMPLOYEE_RESET } from '../../constants/employeeConstants'


const NewEmployee   = ( {history} ) =>{

    const[employee, SetEmployee] =  useState({
        First_Name : '',
        Last_Name : '',
        Address : '',
        BirthDay : '',
        Gender : '',
        Email_Address : '',
        Phone_Number : '',
        OT_Rates : '',
        Basic_Salary : ''

    })

    const {First_Name, Last_Name, Address, BirthDay, Gender, Email_Address, Phone_Number,  OT_Rates ,Basic_Salary}  = employee;

  //  const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, isAuthenticated  } = useSelector (state => state.employee);

    useEffect(() =>{
       
        if (isAuthenticated) {
            history.push('/emplist')
        }
        if(error){
            //history.push('admin/employees')
            //alert.success('Employee Created Successfully');
           // dispatch({type: NEW_EMPLOYEE_RESET})

            //alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, error, isAuthenticated, history])

    const submitHandler = (e) => {
        e.preventDefault();

        /*const formData = new FormData();
        formData.set('First_Name', First_Name);
        formData.set('Last_Name', Last_Name);
        formData.set('Address', Address);
        formData.set('BirthDay', BirthDay);
        formData.set('Gender', Gender);
        formData.set('Email_Address', Email_Address);
        formData.set('Phone_Number', Phone_Number);
        formData.set('OT_Rates', OT_Rates);
        formData.set('Basic_Salary', Basic_Salary);

        dispatch(newEmployee(formData))*/

        const payload = {
        First_Name,
        Last_Name,
        Address,
        BirthDay,
        Gender,
        Email_Address,
        Phone_Number,
        OT_Rates,
        Basic_Salary
        }
         dispatch (newEmployee(payload))
    }
    const onChange = e => {

       // const file = Array.from(e.target.files)

        SetEmployee ({...employee, [e.target.name]: e.target.value})

    }

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
                <MetaData title = {'Add Employees'}/>
                <Fragment>
                <Header/>
                <section className="container_yo">
                <Admin_nav/>
                </section>

                <section className="container555424452345255">

                        
                <div className = "body_rtk">
                    
                <div className = "container_1rtk">
                            <div class="title-rtk">Add New Employee</div>
                                <div className = "content_rtk">
                    <form  onSubmit = {submitHandler} encType='multipart/form-data'>
                            <div class = "user-details-rtk">

                                <div className = "input-box-rtk">
                                    <label for = "name"> First name</label>
                                    <input
                                     type = "text" 
                                     className= "form-control-rtk" 
                                     id="name"
                                     placeholder = "First name"
                                     required
                                     name = 'First_Name'
                                     value= {First_Name}
                                     onChange = {onChange}
                                    
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name"> Last Name</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name" 
                                    placeholder = "Last Name" 
                                    name = 'Last_Name'
                                    value= {Last_Name}
                                    onChange = {onChange}
                                   
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name"> Address</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name" 
                                    placeholder = "Address" 
                                    required
                                    name = 'Address'
                                    value= {Address}
                                    onChange = {onChange}
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name">Birthday</label>
                                    <input 
                                    type = "date" 
                                    className= "form-control-rtk" 
                                    id="name"  
                                    required
                                    name = 'BirthDay'
                                    value= {BirthDay}
                                    onChange = {onChange}
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name">Email</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name" 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                    placeholder = "abc@gmail.com"
                                    name = 'Email_Address'
                                    value= {Email_Address}
                                     onChange = {onChange}
                                    
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name">Phone Number</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name" 
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                    placeholder= "07x-xxx-xxxx"
                                    required
                                    name = 'Phone_Number'
                                    value= {Phone_Number}
                                    onChange = {onChange}
                                  
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name">Basic Salary</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name"
                                    placeholder = "0000.00"  
                                    required
                                    name = 'Basic_Salary'
                                     value= {Basic_Salary}
                                     onChange = {onChange}
                                    
                                    />
                                </div>

                                <div className = "input-box-rtk">
                                    <label for = "name">OT Rates (%)</label>
                                    <input 
                                    type = "text" 
                                    className= "form-control-rtk" 
                                    id="name"
                                    placeholder = "0.0"  
                                    required
                                    name = 'OT_Rates'
                                    value= {OT_Rates}
                                    onChange = {onChange}
                                    
                                    />
                                </div>
                                <div className = "input-box-rtk">
                                    <label for = "name">Gender</label>
                                    <select type="text"
                                            className = "selectRTK"
                                            name = 'Gender'
                                            placeholder = " Male/Female"
                                            value= {Gender}
                                            onChange = {onChange} 
                                            >

                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            
                                     </select>
                                    
                                    
                                </div>
                            </div>


                        
                            <div className = "button-rtk">
                               
                                    <input 
                                    type = "submit"  
                                    value = "Submit"
                                    disabled = {loading ? true : false}
                                   
                                    />
                                   
                                  
                            </div>

                    </form>
                </div>
                </div>
                </div>
    
             </section>   
        </Fragment>
        </Fragment>
        

    )

    }
export default NewEmployee