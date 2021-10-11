import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'


const Bill = (props) => ( 
    <tr>
    <td > { props.Bill.CusID } </td> 
    <td> {props.Bill.Firstname} </td > { " " } 
    <td > { props.Bill.Lastname } </td>{" "}
     <td > { props.Bill.Billdate.substring(0, 10) } </td>{" "}
    <td > { props.Bill.Billamount } </td> 
    <td> {props.Bill.Bank} </td > { " " }
    <td > { props.Bill.Branch } </td>{" "} 
    <td > { props.Bill.Contactno } </td>{" "} 
    <td > { props.Bill.Email } </td>{" "} 
    <td >
    <Link to = { "/edit/" + props.Bill._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteBill(props.Bill._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class BillsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Bills: [],
        };
    }
   
    componentDidMount() {
        axios
            .get("http://localhost:4000/Bill/")
            .then((response) => {
                this.setState({ Bills: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:4000/Bill/")
            .then((response) => {
                this.setState({ Bills: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteBill(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:4000/Bill/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Bills: this.state.Bills.filter((el) => el._id !== id),
            });
        }
    }

    BillList() {
        return this.state.Bills.map((currentBill) => {
            return ( <
                Bill Bill = { currentBill }
                deleteBill = { this.deleteBill }
                key = { currentBill._id }
                />
            );
        });
    }

    filterData(Bill, searchKey) {
        this.setState({
            Bills: this.state.Bills.filter((el) => (el.Firstname = searchKey)),
        });
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:4000/Bill/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Firstname.includes(searchKey)
            );

            this.setState({ Bills: result });
        });
    };

    print() {
        window.print();
    }

    render() {
        return ( 
            <div>
            
                <MetaData title ={'Bill Payments'}/>
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
                
                                <section className="container555424224255">
                                        <div  >
                                        <div className = "container" >
                                                </div> <br/ >
                                                <div className = "row" >
                                                <div div className = "col-lg-9 mt-2 mb-2">
                                                <h3 > All Bill Payment Details  </h3>
                                                </div > 
                                                <br></br>

                                                <br></br>
                                                <br></br>
                                                
                                                <div className = "col-lg-3 mt-1 mb-2" >
                                                <input className = "form-control" type = "search" placeholder = "Search by First name" name = "searchQuery" onChange = { this.handleSearchArea } >
                                                </input>
                                                </div > 
                                                </div>
                                                
                                                <table class = "table table-bordered table-white" >
                                                <thead className = "thead-light" >
                                                <tr >
                                                <th > Customer ID </th> <th> First Name </th > < th > Last Name </th> 
                                                <th > Bill Date </th> <th> Bill Amount </th > < th > Bank </th> 
                                                <th > Branch </th> <th > Contact Number </th><th > Email </th><th> Actions </th >  
                                                </tr> </thead > 
                                                <tbody >  {
                                                    this.state.Bills.map((props) => ( 
                                                        <tr key = { props.id }>
                                                        <td > { props.CusID } </td> <td> {props.Firstname} </td > 
                                                        <td > { props.Lastname } </td>
                                                        <td > { props.Billdate.substring(0, 10) } </td>
                                                        <td > { props.Billamount } </td> <td> {props.Bank} </td > 
                                                        <td > { props.Branch } </td><td > { props.Contactno } </td>
                                                        <td > { props.Email } </td>
                                                        <td >
                                                        < Link to = { "/editbill/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                                                        <a href = ""onClick = {() => {this.deleteBill(props._id);}} >  
                                                        <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                                                        </td>  </ tr >))}  </tbody> </table > 
                                                        </div>
                                            </section>   
            </div >
                        
        );
    }
}