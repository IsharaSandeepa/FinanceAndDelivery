import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Delivery = (props) => ( 
    <tr>
    <td > { props.Delivery.DPID } </td> 
    <td> {props.Delivery.DPname} </td > { " " } 
    <td > { props.Delivery.Amount } </td>{" "}
     <td > { props.Delivery.Date.substring(0, 10) } </td>{" "}
    <td > { props.Delivery.Contactno } </td> 
   
    
    
     </tr>
);

const Employee = (props) => ( 
    <tr>
    <td > { props.Employee.EmpID } </td> 
    <td> {props.Employee.Empname} </td > { " " } 
    <td > { props.Employee.Amount } </td>{" "}
     <td > { props.Employee.Date.substring(0, 10) } </td>{" "}
    <td > { props.Employee.Contactno } </td> 
    <td > { props.Employee.Email } </td> 
    
    
     </tr>
);

const Supplier = (props) => ( 
    <tr>
    <td > { props.Supplier.SupID } </td> 
    <td> {props.Supplier.Supname} </td > { " " } 
    <td > { props.Supplier.Amount } </td>{" "}
     <td > { props.Supplier.Date.substring(0, 10) } </td>{" "}
    <td > { props.Supplier.Contactno } </td> 
    <td > { props.Supplier.Email } </td> 
    
    
     </tr>
);



export default class SupplierList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Delivery: [],
            Employee: [],
            Supplier: [],
        };
    }

    componentDidMount() {
       { axios
            .get("http://localhost:4000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });}

            
            {
                axios
                    .get("http://localhost:4000/Employee/")
                    .then((response) => {
                        this.setState({ Employee: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            {
                axios
                    .get("http://localhost:4000/Supplier/")
                    .then((response) => {
                        this.setState({ Supplier: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
    }

    getPosts() {
        {axios
            .get("http://localhost:4000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });}


            {
                axios
                    .get("http://localhost:4000/Employee/")
                    .then((response) => {
                        this.setState({ Employee: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            {
                axios
                    .get("http://localhost:4000/Supplier/")
                    .then((response) => {
                        this.setState({ Supplier: response.data });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

    }

    
    DeliveryList() {
        return this.state.Delivery.map((currentDelivery) => {
            return ( <
                Delivery Delivery = { currentDelivery }
                deleteDelivery = { this.deleteDelivery }
                key = { currentDelivery._id }
                />
            );
        });
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

    SupplierList() {
        return this.state.Supplier.map((currentSupplier) => {
            return ( <
                Supplier Supplier = { currentSupplier }
                deleteSupplier = { this.deleteSupplier }
                key = { currentSupplier._id }
                />
            );
        });
    }




    

    print() {
        window.print();
    }

    render() {
        return ( 
            <div className = "container" >    
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
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Delivery payment  </h3>
             
              </div>
            <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Name </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th>
            </tr> </thead > 
            <tbody >  {
                this.state.Delivery.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.DPID } </td> 
                    <td> {props.DPname} </td > 
                    <td > { props.Amount } </td>
                    <td > {props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                    
                    </ tr >))}  </tbody> </table > 

            <br></br>

            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Employee Payment  </h3>
             </div > 
            <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Name </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th>
            <th> Email </th >
          
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
                     </ tr >))}  </tbody> </table > 

<br></br>



<div  className = "col-9 mt-1 mb-1">
<h3 > All Supplier Payemnt  </h3>
 </div > 
 
  <table class = "table table-bordered table-white" >
<thead className = "thead-light" >
<tr >
<th > ID </th> <th>  Name </th > < th > Amount </th> 
<th > Date </th>  <th>Contact Number </th>
<th> Email </th >

</tr> </thead > 
<tbody >  {
    this.state.Supplier.map((props) => ( 
        <tr key = { props.id }>
        <td > { props.SupID } </td> 
        <td> {props.Supname} </td > 
        <td > { props.Amount } </td>
        <td > { props.Date.substring(0, 10) } </td>
         <td > { props.Contactno } </td> 
         <td > { props.Email } </td> 
        </ tr >))}  </tbody> </table > 

<div style = {{ float: "right" }}>
<a href = ""onClick = {() => {this.print();}} > 
<Button class = "btn btn-success" > Print </Button> </a > 
 </div> 




                  </div >   
                     
           
        );
    }
}