import React, { Fragment,useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {MDBDataTable } from 'mdbreact'
import Loader  from '../layout/Loader'

import MetaData from '../layout/MetaData'


import Swal from 'sweetalert2'
import '../style/emplist.css'

//import from mn
import jsPdf from 'jspdf';
import 'jspdf-autotable';

import { useAlert } from 'react-alert'
import {  useDispatch , useSelector } from 'react-redux'
import {  allEmployees, deleteEmployee,clearErrors } from '../../actions/employeeActions'
import { DELETE_EMPLOYEE_RESET } from '../../constants/employeeConstants'

const EmployeesList = ( {history} ) => {

   // const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, employees  } = useSelector (state => state.allEmployees);
    const { isDeleted} = useSelector(state => state.employee)

    useEffect(() =>{
       
       dispatch(allEmployees());

        if(error){
          //  history.push('admin/employees')
           // alert.success('Employee Created Successfully');
           //dispatch({type: NEW_EMPLOYEE_RESET})

            //alert.error(error);
            dispatch(clearErrors());
        }

        if(isDeleted) {
           alert.success('Employee Deleted Successfully');
           history.push ('/emplist');
           dispatch ({ type: DELETE_EMPLOYEE_RESET} ) 

        }

    }, [dispatch, error, isDeleted, history]
       /* [dispatch, error, isAuthenticated, history]*/)

   /* const deleteEmployeeHandler   = (id) => {
        //dispatch(deleteEmployee(id))
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteEmployee(id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

    }*/

  
    const SetEmployees = () => {

        const data = {
            columns: [
                {
                    label:'ID',
                    field:'id',
                    sort:'asc',
                },
                {
                    label:'First Name',
                    field:'First_Name',
                    sort:'asc',
                },
                {
                    label:'Last Name',
                    field:'Last_Name',
                    sort:'asc',
                },
                {
                    label:'Address',
                    field:'Address',
                    sort:'asc',
                },
                {
                    label:'Birthday',
                    field:'BirthDay',
                    sort:'asc',
                },
                {
                    label:'Gender',
                    field:'Gender',
                    sort:'asc',
                },
                {
                    label:'Email Address',
                    field:'Email_Address',
                    sort:'asc',
                },
                {
                    label:'Phone Number',
                    field:'Phone_Number',
                    sort:'asc',
                },
                {
                    label:'OT Rates',
                    field:'OT_Rates',
                    sort:'asc',
                },
                {
                    label:'BasicSalary',
                    field:'Basic_Salary',
                    sort:'asc',
                },
                {
                    label:'OT Hours',
                    field:'OT_Hours',
                    sort:'asc',
                },
                {
                    label:'Monthly Salary',
                    field:'Monthly_salary',
                    sort:'asc',
                },
                /*{
                    label:'Action',
                    field:'actions',
                    
                }*/
            ],

            rows: []
        }
            employees.forEach(employee => {
                data.rows.push({
                    id: employee._id,
                    First_Name: employee.First_Name,
                    Last_Name: employee.Last_Name,
                    Address: employee.Address,
                    BirthDay: employee.BirthDay,
                    Gender: employee.Gender,
                    Email_Address: employee.Email_Address,
                    Phone_Number: employee.Phone_Number,
                    OT_Rates: employee.OT_Rates,
                    OT_Hours: employee.OT_Hours,
                    Basic_Salary: employee.Basic_Salary,
                    Monthly_salary:employee.Monthly_salary,

                   /* actions: <div>
                    <Link to= {`/admin/employee/${employee._id}`} className = "btn btn-primary py-1 px-2 ml-1 mr-5" >
                        <i className =" fa fa-pencil" ></i>
                    
                     </Link>  
                     <button className= "btn btn-danger py-1 px-2 ml-5 mb-1" onClick = { () =>
                    deleteEmployeeHandler(employee._id)}>
                         <i className = "fa fa-trash"></i>
                                                   
                     </button>
                     </div> */

                })
            })
            return data; }

            //import report 
        function jsPdfGenerator  ()  {



            //alert("Done!", "Your Report is Downloding!", "success")
            Swal.fire({ 
                position: 'top-center', 
                icon: 'success', 
                title: 'Report Dowloaded Successfully', 
                showConfirmButton: false, 
                timer: 1500 })
        
        
        
            //new document in jspdf
        
            const doc = new jsPdf('l', 'pt', 'a3');
        
        
        
            doc.text(600, 20, 'Employee Details Report', { align: 'center' },);
        
            doc.autoTable({ html: '#Employee-table' })
        
        
        
            doc.autoTable({
        
              columnStyles: { europe: { halign: 'EmployeeDetailsPdf' } },
        
              margin: { top: 10 },
        
            })
        
        
        
            //save the pdf
        
            doc.save("Employee Details.pdf");
        
          }


        //end report

      
       
    return (
        <div className = "container_emplist">
            <MetaData title = {'All Employees'}/>

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

        <div className = "row">
      
        <div className = "col-12 col-md-100">
            <div>
                <h1 className = "">ALL Employees</h1>
                
                {loading ? <Loader /> : (
                            <MDBDataTable

                                data={SetEmployees()}
                                className="px-1"
                                bordered
                                striped
                                hover
                                id = 'Employee-table'
                                className = 'table'
                            />
                        )}

                <button className="profileBtn" onClick ={jsPdfGenerator}> Generate Report PDF</button>


                  
            </div>
        </div>
        </div> 
        </div>
        
    )
}

export default EmployeesList
