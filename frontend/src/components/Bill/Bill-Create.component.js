 import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import "../myformStyle.css";
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import '../style/add_feedback.css'
import MetaData from '../layout/MetaData'

export default class CreateBill extends Component {
    constructor(props) {
       
        super(props);

        this.onChangeCusID = this.onChangeCusID.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeBilldate = this.onChangeBilldate.bind(this);
        this.onChangeBillamount = this.onChangeBillamount.bind(this);
        this.onChangeBank = this.onChangeBank.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            CusID: "",
            Firstname: "",
            Lastname:"",
            Billdate: "",
            Billamount: "",
            Bank: "",
            Branch:"",
            Contactno: "",
            Email:"",
            Bill: [],
        };
    }

    //set the CusID

    onChangeCusID(e) {
        this.setState({
            CusID: e.target.value,
        });
    }

    //set the Firstname

    onChangeFirstname(e) {
        this.setState({
            Firstname: e.target.value,
        });
    }

    //set Lastname
    onChangeLastname(e) {
        this.setState({
            Lastname: e.target.value,
        });
    }

   


    

    onChangeBilldate(e) {
       // console.log(e.target.value)
        this.setState({
            Billdate: e.target.value,
        });
    }

    //set Billamount
    onChangeBillamount(e) {
        this.setState({
            Billamount: e.target.value,
        });
    }

    //set Bank
    onChangeBank(e) {
        this.setState({
            Bank: e.target.value,
        });
    }

    //set Branch
    onChangeBranch(e) {
        this.setState({
            Branch: e.target.value,
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

        const { Contactno, Billamount } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno))) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number!",
                "error"
            );

        } else if (!cup.test(String(Billamount))) {
            swal(
                "Invalid Bill Amount!",
                "Bill Amount Should be number!",
                "error"
            );
        } else {

            const Bill = {
                CusID: this.state.CusID,
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Billdate: this.state.Billdate,
                Billamount: this.state.Billamount,
                Bank: this.state.Bank,
                Branch: this.state.Branch,
                Contactno: this.state.Contactno,
                Email: this.state.Email,
            };

            console.log(Bill);

            axios
                .post("http://localhost:4000/Bill/add", Bill)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = ""));
            });
        }
    }

    render() {
        return ( 
        <div  >
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
            <MetaData title={'Give Feedback'}/>
            <Header/>
            <div className="formcontainer5554555">
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" className = "h3544"> Bill Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Customer Id: </label> 
            <input type = "text"
            
            placeholder = "Customer Id"
            required className = "form-control"
            onChange = { this.onChangeCusID }
            /> 
            </div> <div className = "form-group" >
            <label > First Name: </label> 
            <input type = "text"
            placeholder = "First Name"
            required className = "form-control"
            onChange = { this.onChangeFirstname }
            /> 
            </div >  
            <div className = "form-group" >
            <label > Last Name: </label> 
            <input type = "text"
            placeholder = "Last Name"
            required  className = "form-control"
            onChange = { this.onChangeLastname }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label> 
            
            </div>

            <div className = "form-group" >
            <input type = "date"
           required className = "form-control"
            placeholder = "Bill Date"
            onChange = { this.onChangeBilldate }/>
            </div>
             

            <div className = "form-group" >
            <label > Bill Amount: </label> 
            <input type = "text"
           required className = "form-control"
            placeholder = "Bill Amount"
            onChange = { this.onChangeBillamount }/> 
            </div >  

            <div className = "form-group" >
            <label > Bank: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Bank"
            onChange = { this.onChangeBank }/> 
            </div >  


            <div className = "form-group" >
            <label > Branch: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Branch"
            onChange = { this.onChangeBranch }/> 
            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Contact No"
            onChange = { this.onChangeContactno }/> 
            </div > 

            <div className = "form-group" >
            <label > Email: </label> 
            <input type = "Email"
            required className = "form-control"
            placeholder = "Email"
            onChange = { this.onChangeEmail }/> 
            </div > 
            
            
            <div className = "form-group" >
            <input type = "submit"
            value = "Add Bill Payment"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
              <Footer/> </div>
        );
    }
}