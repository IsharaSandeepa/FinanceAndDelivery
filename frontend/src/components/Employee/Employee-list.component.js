import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

const Employee = (props) => ( 
    <tr>
    <td > { props.Employee.EmpID } </td> 
    <td> {props.Employee.Empname} </td > { " " } 
    <td > { props.Employee.Amount } </td>{" "}
     <td > { props.Employee.Date.substring(0, 10) } </td>{" "}
    <td > { props.Employee.Contactno } </td> 
    <td > { props.Employee.Email } </td> 
    
    <td >
    <Link to = { "/supdate/" + props.Employee._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteEmployee(props.Employee._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Employee: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/Employee/")
            .then((response) => {
                this.setState({ Employee: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:4000/Employee/")
            .then((response) => {
                this.setState({ Employee: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteEmployee(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:4000/Employee/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Employee: this.state.Employee.filter((el) => el._id !== id),
            });
        }
    }

    EmployeeList() {
        return this.state.Employee.map((currentEmployee) => {
            return ( <
                Employee Employee = { currentEmployee }
                deleteEmployee = { this.deleteEmployee }
                key = { currentEmployee._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:4000/Employee/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Empname.includes(searchKey)|| props.EmpID.includes(searchKey)
            );

            this.setState({ Employee: result });
        });
    };

  

    render() {
        return (
            <div  >
                        <MetaData title ={'Employee Payments'}/>
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
                            
                                <Header/>
                                <section className="container_yo">
                                    <Admin_nav/>
                                </section>
                
                    <section className="container55542445234535255">
                        
                                            <br/ >
                                            <div className = "row" >
                                            <div  className = "col-9 mt-1 mb-1">
                                            <h3 > All Employee  Payment Details  </h3>
                                            </div > 
                                            <br></br>

                                            <br></br>
                                            <br></br>
                                            
                                            <div className = "col-lg-3 mt-1 mb-2" >
                                            <input className = "form-control" type = "search" placeholder = "Search by Name" name = "searchQuery" onChange = { this.handleSearchArea } >
                                            </input>
                                            </div > 
                                            </div>
                                            
                                            <table class = "table table-bordered table-white" >
                                            <thead className = "thead-light" >
                                            <tr >
                                            <th > ID </th> <th>  Name </th > < th > Amount </th> 
                                            <th > Date </th>  <th>Contact Number </th>
                                            <th> Email </th >
                                            <th> Actions </th >  
                                            </tr> </thead > 
                                            <tbody >  {
                                                this.state.Employee.map((props) => ( 
                                                    <tr key = { props.id }>
                                                    <td > { props.EmpID } </td> 
                                                    <td> {props.Empname} </td > 
                                                    <td > { props.Amount } </td>
                                                    <td > { props.Date.substring(0, 10) } </td>
                                                    <td > { props.Contactno } </td> 
                                                    <td > { props.Email } </td> 
                                                    <td >
                                                    < Link to = { "/empdate/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                                                    <a href = ""onClick = {() => {this.deleteEmployee(props._id);}} >  
                                                    <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                                                    </td>  </ tr >))}  </tbody> </table > 
                                                    <div style = {{ float: "right" }}>
                                        
                                            < Link to = "/empcre/" >
                                            <button type = "button" class = "btn btn-success" variant = "primary" >
                                            New Payment  </button> </Link >
                                             
                                            </div > 
                        </section>
                </div >
        );
    }
}