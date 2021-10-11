import React, { Component } from "react";
import axios from "axios";
//import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import "../myformStyle.css";

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

export default class CreateDelivery extends Component {
    constructor(props) {
        super(props);

        this.onChangeDPID = this.onChangeDPID.bind(this);
        this.onChangeDPname = this.onChangeDPname.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            DPID: "",
            DPname: "",
            Amount:"",
            Date: "",
            Contactno: "",
            Delivery: [],
        };
    }

    //set the DPID

    onChangeDPID(e) {
        this.setState({
            DPID: e.target.value,
        });
    }

    //set the DPname

    onChangeDPname(e) {
        this.setState({
            DPname: e.target.value,
        });
    }

    //set Amount
    onChangeAmount(e) {
        this.setState({
            Amount: e.target.value,
        });
    }

    //set Date
  


    onChangeDate(e) {
        this.setState({
            Date: e.target.value,
        });
    }
    //set Contactno
    onChangeContactno(e) {
        this.setState({
            Contactno: e.target.value,
        });
    }



    //submit Function

    onSubmit(e) {
        e.preventDefault();
        const { Contactno, Amount } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno))|| (Contactno.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );

        } else if (!cup.test(String(Amount))) {
            swal(
                "Invalid  Amount!",
                " Amount Should be number!",
                "error"
            );
        } else {

            const Delivery = {
                DPID: this.state.DPID,
                DPname: this.state.DPname,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,
               
            };

            console.log(Delivery);

            axios
                .post("http://localhost:4000/Delivery/add", Delivery)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/dellist/"));
            });
        }
    }

    render() {
        return ( <div  >
            <MetaData title ={'Add Delivery Payments'}/>
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
                
                                <section className="container55555"> 
                                <div className="formcontainer5554555">
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" className = "h3544"> Delivery Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Delivery Person's ID: </label> 
            <input type = "text"
            placeholder = "Delivery Person's ID"
            required className = "form-control"
            onChange = { this.onChangeDPID }
            /> 
            </div> <div className = "form-group" >
            <div  className = "col-md-8 mt- mx-auto" >
            <label > Delivery Person's Name: </label> </div>
            <input type = "text"
            placeholder = "Delivery Person's Name"
            required className = "form-control"
            onChange = { this.onChangeDPname }
            /> 
            </div >  
            <div className = "form-group" >
            <div  className = "col-md-8 mt- mx-auto" >
            <label > Amount: </label> 
            </div>
            <input type = "text"
            placeholder = "Amount"
            required  className = "form-control"
            onChange = { this.onChangeAmount }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label>
            <input type = "date"
            placeholder = "Date"
            required  className = "form-control"
            onChange = { this.onChangeDate }/>

            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "text"
            placeholder = "Contact No"
            required  className = "form-control"
            onChange = { this.onChangeContactno }/>
             </div > 

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Add Payment"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
               </section></div>
        );
    }
}