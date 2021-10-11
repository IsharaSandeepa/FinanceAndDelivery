import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import DatePicker from 'react-datepicker';

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

export default class EditStock extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:4000/Bill/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    CusID: response.data.CusID,
                    Firstname: response.data.Firstname,
                    Lastname: response.data.Lastname,
                    //Billdate:  new Date(response.data.Billdate),
                    Billdate:  response.data.Billdate,
                    Billamount: response.data.Billamount,
                    Bank: response.data.Bank,
                    Branch: response.data.Branch,
                    Contactno: response.data.Contactno,
                    Email: response.data.Email,
                    
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:4000/Bill/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Bill: response.data.map(Bill => Bill.Firstname),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
           

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

//set Billdate

onChangeBilldate(e) {
     console.log(e.target.value)
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
                .post('http://localhost:4000/Bill/update/' + this.props.match.params.id, Bill)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/listbill/"));
            });
        }

    }

    render() {
        return (<div  >
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
                
                                <section className="container55555">
                                    
            <div class = "myForm ">
             
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6"className="h3544" > Update Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Customer Id: </label> 
            <input type = "text"
            placeholder = "Customer Id"
            required className = "form-control"
            value = { this.state.CusID }
            onChange = { this.onChangeCusID }
            /> 
            </div> <div className = "form-group" >
            <label > First Name: </label> 
            <input type = "text"
            placeholder = "First Name"
            required className = "form-control"
            value = { this.state.Firstname }
            onChange = { this.onChangeFirstname }
            /> 
            </div >  
            <div className = "form-group" >
            <label > Last Name: </label> 
            <input type = "text"
            placeholder = "Last Name"
            required  className = "form-control"
            value = { this.state.Lastname }
            onChange = { this.onChangeLastname }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label> 
           
            <input type = "date"
           required className = "form-control"
            placeholder = "Bill Date"
            value = { this.state.Billdate }
            onChange = { this.onChangeBilldate }/>
           
            </div >  

            <div className = "form-group" >
            <label > Bill Amount: </label> 
            <input type = "text"
           required className = "form-control"
            placeholder = "Bill Amount"
            value = { this.state.Billamount }
            onChange = { this.onChangeBillamount }/> 
            </div >  

            <div className = "form-group" >
            <label > Bank: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Bank"
            value = { this.state.Bank }
            onChange = { this.onChangeBank }/> 
            </div >  


            <div className = "form-group" >
            <label > Branch: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Branch"
            value = { this.state.Branch }
            onChange = { this.onChangeBranch }/> 
            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Contact No"
            value = { this.state.Contactno }
            onChange = { this.onChangeContactno }/> 
            </div > 

            <div className = "form-group" >
            <label > Email: </label> 
            <input type = "Email"
            required className = "form-control"
            placeholder = "Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/> 
            </div > 
            
            
            <div className = "form-group" >
            <input type = "submit"
            value = "Add Bill Payment"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </section></div>
        )
    }
}