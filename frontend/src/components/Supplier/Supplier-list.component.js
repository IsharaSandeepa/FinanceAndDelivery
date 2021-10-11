import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

const Supplier = (props) => ( 
    <tr>
    <td > { props.Supplier.SupID } </td> 
    <td> {props.Supplier.Supname} </td > { " " } 
    <td > { props.Supplier.Amount } </td>{" "}
     <td > { props.Supplier.Date.substring(0, 10) } </td>{" "}
    <td > { props.Supplier.Contactno } </td> 
    <td > { props.Supplier.Email } </td> 
    
    <td >
    <Link to = { "/supdate/" + props.Supplier._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteSupplier(props.Supplier._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SupplierList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Supplier: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:4000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteSupplier(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:4000/Supplier/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Supplier: this.state.Supplier.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:4000/Supplier/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Supname.includes(searchKey)|| props.SupID.includes(searchKey)
            );

            this.setState({ Supplier: result });
        });
    };

   
    render() {
        return (

            <div  >
            <MetaData title ={'Supplier Payments'}/>
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
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Supplier Details  </h3>
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
                this.state.Supplier.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.SupID } </td> 
                    <td> {props.Supname} </td > 
                    <td > { props.Amount } </td>
                    <td > { props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                     <td > { props.Email } </td> 
                    <td >
                    < Link to = { "/supdate/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteSupplier(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/supcre/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Payment  </button> </Link > </div> </section>
            </div >
        );
    }
}