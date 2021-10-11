import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import "../myformStyle.css";


import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'
export default class CreateSupplier extends Component {
    constructor(props) {
        super(props);

        this.onChangeSupID = this.onChangeSupID.bind(this);
        this.onChangeSupname = this.onChangeSupname.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            SupID: "",
            Supname: "",
            Amount:"",
            Date: "",
            Contactno: "",
            Email:"",
            Supplier: [],
        };
    }

    //set the SupID

    onChangeSupID(e) {
        this.setState({
            SupID: e.target.value,
        });
    }

    //set the Supname

    onChangeSupname(e) {
        this.setState({
            Supname: e.target.value,
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


     //set Email
     onChangeEmail(e) {
        this.setState({
            Email: e.target.value,
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

            const Supplier = {
                SupID: this.state.SupID,
                Supname: this.state.Supname,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,
                Email: this.state.Email,
               
            };

            console.log(Supplier);

            axios
                .post("http://localhost:4000/Supplier/add", Supplier)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/listsup/"));
            });
        }
    }

    render() {
        return ( <div  >
            <MetaData title ={'Add Supplier Payments'}/>
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
                
                                <section className="container55555"> <div className="formcontainer5554555">
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" className = "h3544"> Supplier Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label >Supplier ID: </label> 
            <input type = "text"
            placeholder = "Supplier ID"
            required className = "form-control"
            onChange = { this.onChangeSupID }
            /> 
            </div> <div className = "form-group" >
            <div  className = "col-md-8 mt- mx-auto" >
            <label > Supplier Name: </label> </div>
            <input type = "text"
            placeholder = "Supplier Name"
            required className = "form-control"
            onChange = { this.onChangeSupname }
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
            <label > Email: </label> 
            <input type = "Email"
            placeholder = "Email"
            required  className = "form-control"
            onChange = { this.onChangeEmail }/>
             </div >

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Add "
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
            </section></div>
        );
    }
}