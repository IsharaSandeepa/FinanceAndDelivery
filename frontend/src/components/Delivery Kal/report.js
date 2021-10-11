import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

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
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Delivery Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Fisrt Name </th> <th>  Last Name </th > < th > Address </th> 
            <th > Birth Day </th>  <th>Gender </th><th> Email </th >  
            <th>Contact Number </th>
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
                      </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            <a href = ""onClick = {() => {this.print();}} > 
            <Button class = "btn btn-success" > Print </Button> </a > 
             </div> 
            </div >
        );
    }
}