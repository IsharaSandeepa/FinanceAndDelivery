import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'
const Delivery = (props) => ( 
    <tr>
    <td > { props.Delivery.Fisrtname } </td> 
    <td> {props.Delivery.Lastname} </td > { " " } 
    <td > { props.Delivery.Address } </td>{" "}
     <td > { props.Delivery.Birthday.substring(0, 10) } </td>{" "}
    <td > { props.Delivery.Gender } </td> 
    <td> {props.Delivery.Email} </td > { " " } 
    <td > { props.Delivery.PhoneNumber } </td>{" "}
    
    <td >
    <Link to = { "/edit/" + props.Delivery._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteDelivery(props.Delivery._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class DeliverysList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Delivery: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/DeliveryKal/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:4000/DeliveryKal/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteDelivery(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:4000/DeliveryKal/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Delivery: this.state.Delivery.filter((el) => el._id !== id),
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:4000/DeliveryKal/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Fisrtname.includes(searchKey)|| props.Lastname.includes(searchKey)
            );

            this.setState({ Delivery: result });
        });
    };

    print() {
        window.print();
    }

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
                                <div className = "row" >
                                <div  className = "col-9 mt-1 mb-1">
                                <h3 > All Details of Delivery Persons </h3>
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
                                <th > Fisrt Name </th> <th>  Last Name </th > < th > Address </th> 
                                <th > Birth Day </th>  <th>Gender </th><th> Email </th >  
                                <th>Contact Number </th><th> Actions </th > 
                                </tr> </thead > 
                                <tbody >  {
                                    this.state.Delivery.map((props) => ( 
                                        <tr key = { props.id }>
                                        <td > { props.Fisrtname } </td> 
                                        <td> {props.Lastname} </td > 
                                        <td > { props.Address } </td>
                                        <td > { props.Birthday.substring(0, 10) } </td>
                                        <td > { props.Gender } </td> 
                                        <td> {props.Email} </td > 
                                        <td > { props.PhoneNumber } </td>
                                        <td >
                                        < Link to = { "/updelivery/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                                        <a href = ""onClick = {() => {this.deleteDelivery(props._id);}} >  
                                        <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                                        </td>  </ tr >))}  </tbody> </table > 
                                        <div style = {{ float: "right" }}>
                                
                                < Link to = "/crtdelKal/" >
                                <button type = "button" class = "btn btn-success" variant = "primary" >
                                New   </button> </Link > </div> 
                                
            </section>
                </div >
        );
    }
}