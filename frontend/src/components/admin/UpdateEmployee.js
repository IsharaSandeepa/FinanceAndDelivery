import React, { Fragment,useState, useEffect } from 'react'

import MetaData from '../layout/MetaData';

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";

import { useAlert } from 'react-alert'
import {  useDispatch , useSelector } from 'react-redux'
import {  updateEmployee,getEmployeeDetails,clearErrors } from '../../actions/employeeActions'
import  { UPDATE_EMPLOYEE_RESET } from '../../constants/employeeConstants'


const UpdateEmployee = ( {history, match}) => {

    
    const [First_Name, setFirst_Name] =  useState('')
    const [Last_Name, setLast_Name] =  useState('')
    const [Address, setAddress] =  useState('')
    const [BirthDay, setBirthDay] =  useState('')
    const [Gender, setGender] =  useState('')
    const [Email_Address, setEmail_Address] =  useState('')
    const [Phone_Number, setPhone_Number] =  useState('')
    const [OT_Rates, setOT_Rates] =  useState('')
    const [Basic_Salary, setBasic_Salary] =  useState('')
    const [OT_Hours, setOT_Hours] =  useState('')
    const [Monthly_salary, setMonthly_salary] = useState('')
    

//  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated } = useSelector (state => state.employee);
  const { employee } = useSelector (state => state.employeeDetails)

  const employeeId = match.params.id;

  useEffect(() =>{
     
      if (employee && employee._id !== employeeId) {
          dispatch(getEmployeeDetails(employeeId))
      }else{
          setFirst_Name(employee.First_Name);
          setLast_Name(employee.Last_Name);
          setAddress(employee.Address);
          setBirthDay(employee.BirthDay);
          setGender(employee.Gender);
          setEmail_Address(employee.Email_Address);
          setPhone_Number(employee.Phone_Number);
          setOT_Rates(employee.OT_Rates);
          setBasic_Salary(employee.Basic_Salary);
          setOT_Hours(employee.OT_Hours);
          setMonthly_salary(employee.Monthly_salary)

      }
      if(error){
          //history.push('admin/employees')
          //alert.success('Employee Created Successfully');
         // dispatch({type: NEW_EMPLOYEE_RESET})

          //alert.error(error);
          dispatch(clearErrors());
      }

      if(isUpdated){
          history.push('/emplist')

          dispatch({
              type: UPDATE_EMPLOYEE_RESET
          })
      }

  }, [dispatch,  isUpdated, history, error, employee, employeeId])

  const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.set('First_Name', First_Name);
      formData.set('Last_Name', Last_Name);
      formData.set('Address', Address);
      formData.set('BirthDay', BirthDay);
      formData.set('Gender', Gender);
      formData.set('Email_Address', Email_Address);
      formData.set('Phone_Number', Phone_Number);
      formData.set('OT_Rates', OT_Rates);
      formData.set('Basic_Salary', Basic_Salary);
      formData.set('OT_Hours', OT_Hours);
      formData.set('Monthly_salary', Monthly_salary);

      dispatch(updateEmployee(employee._id, formData))

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
            <MetaData title = {'All Employees'}/>
            <Fragment>
            <Header/>
                <section className="container_yo">
                    <Admin_nav/>
                </section>
  
                <section className="container555424452345255">
            <div className = "container_1rtk">
                        <div className="title-rtk">Update Employee</div>
                            <div className = "content_rtkt">
                                <form  onSubmit = {submitHandler} >
                                    <div className = "user-details-rtk">

                                        <div className = "input-box-rtk">

                                                <label for = "name"> First name</label>
                                                <input
                                                type = "text" 
                                                className= "form-control" 
                                                
                                                required
                                                name = 'First_Name'
                                                value= {First_Name}
                                                onChange = {(e) => setFirst_Name(e.target.value)}
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name"> Last Name</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                name = 'Last_Name'
                                                value={Last_Name}
                                                onChange ={(e) => setLast_Name(e.target.value)}
                                            
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name"> Address</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name ='Address'
                                                value={Address}
                                                onChange ={(e) => setAddress(e.target.value)}
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Birthday</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name ='BirthDay'
                                                value={BirthDay}
                                                onChange ={(e) => setBirthDay(e.target.value)}
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Gender</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                name = 'Gender'
                                                placeholder = " Male/Female"
                                                value={Gender}
                                                onChange ={(e) => setGender(e.target.value)} 
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Email</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                 
                                                name ='Email_Address'
                                                value={Email_Address}
                                                onChange = {(e) =>setEmail_Address(e.target.value)}
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Phone Number</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                 
                                                required
                                                name = 'Phone_Number'
                                                value= {Phone_Number}
                                                onChange = {(e) => setPhone_Number(e.target.value)}
                                            
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">OT Rates</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name = 'OT_Rates'
                                                value= {OT_Rates}
                                                onChange = {(e) => setOT_Rates(e.target.value)}
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Basic Salary</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name = 'Basic_Salary'
                                                value= {Basic_Salary}
                                                onChange = {(e) => setBasic_Salary(e.target.value)}
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">OT Hours</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name ='OT_Hours'
                                                value={OT_Hours}
                                                onChange = {(e) =>setOT_Hours(e.target.value)}
                                                
                                                />
                                            </div>

                                            <div className = "input-box-rtk">
                                                <label for = "name">Monthly Salary</label>
                                                <input 
                                                type = "text" 
                                                className= "form-control" 
                                                  
                                                required
                                                name ='Monthly_salary'
                                                value={Monthly_salary}
                                                onChange ={(e) => setMonthly_salary(e.target.value)}
                                                
                                                />
                                            </div>

                                        </div>

                                            <div className = "button-rtk">

                                                <input 
                                                type = "submit"  
                                                value = "Update"
                                            
                                            />
                                            
                                    </div>

                                </form>
                        </div>
            </div>
            </section>
        </Fragment>
        </Fragment>
             )
        }

export default UpdateEmployee
