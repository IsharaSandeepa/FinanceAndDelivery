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

export default class CreateDelivery extends Component {
    constructor(props) {
        super(props);

        this.onChangeFisrtname = this.onChangeFisrtname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Fisrtname: "",
            Lastname: "",
            Address:"",
            Birthday: "",
            Gender: "",
            Email: "",
            PhoneNumber: "",
            Delivery: [],
        };
    }

   //set the Fisrtname

   onChangeFisrtname(e) {
    this.setState({
        Fisrtname: e.target.value,
    });
}

//set the Lastname

onChangeLastname(e) {
    this.setState({
        Lastname: e.target.value,
    });
}

//set Address
onChangeAddress(e) {
    this.setState({
        Address: e.target.value,
    });
}

//set Birthday
onChangeBirthday(e) {
    this.setState({
        Birthday: e.target.value,
    });
}

//set Gender
onChangeGender(e) {
    this.setState({
        Gender: e.target.value,
    });
}

//set Email
onChangeEmail(e) {
    this.setState({
        Email: e.target.value,
    });
}

//set PhoneNumber
onChangePhoneNumber(e) {
    this.setState({
        PhoneNumber: e.target.value,
    });
}


//submit Function

    onSubmit(e) {
        e.preventDefault();
        const { PhoneNumber} = this.state;
        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(PhoneNumber))|| (PhoneNumber.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );


        }  else {

            const Delivery = {
                Fisrtname: this.state.Fisrtname,
                Lastname: this.state.Lastname,
                Address: this.state.Address,
                Birthday: this.state.Birthday,
                Gender: this.state.Gender,
                Email: this.state.Email,
                PhoneNumber: this.state.PhoneNumber,
            };


            console.log(Delivery);

            axios
                .post("http://localhost:4000/DeliveryKal/add", Delivery)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/"));
            });
        }
    }

    render() {
        
        return ( <div  >
            <MetaData title ={'Register A Delivery Person'}/>
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
                
                                <section className="container55555"> <div className="formcontainer5575554555">
            <div class= "cont">
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" className="h35757744"> Register A Delivery Person </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > First Name : </label> 
            <input type = "text"
            placeholder = "First Name"
            required className = "form-control"
            onChange = { this.onChangeFisrtname }
            /> 
            </div> 
            <div className = "form-group" >
            
            <label > Last Name: </label> 
            <input type = "text"
            placeholder = "Last Name"
            required className = "form-control"
            onChange = { this.onChangeLastname }
            /> 
            </div >  
            <div className = "form-group" >
            
            <label > Address: </label> 
           
            <input type = "text"
            placeholder = "Address"
            required  className = "form-control"
            onChange = { this.onChangeAddress }/>
             </div > 
             
              <div className = "form-group" >
            <label > Birthday: </label>
            
            <input type = "date"
            placeholder = "Date"
            required  className = "form-control"
            onChange = { this.onChangeBirthday }/>


            </div >  

            <div className = "form-group" >
            <label > Gender: </label> 
           <select ref = "Gender"
            placeholder = "Class"
            required className = "form-control"
            onChange = { this.onChangeGender } >
            <option value = "" >  </option>
            <option value = "Male" > Male </option>
            <option value = "Female " > Female </option> 
            
            </select > </div > 

             <div className = "form-group" >
            <label > Email: </label> 
            <input type = "Email"
            placeholder = "Email"
            required  className = "form-control"
            onChange = { this.onChangeEmail }/>
             </div > 


             <div className = "form-group" >
            <label > Phone Number: </label> 
            <input type = "text"
            placeholder = "Phone Number"
            required  className = "form-control"
            onChange = { this.onChangePhoneNumber }/>
             </div > 

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Add"
            className = "btn btn-primary" />
            </div> </form >  </div> </div > </div></div>
            </section></div>
            
        );
       
    }
}