import React, { Fragment, useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'


import '../style/login.css'


const ForgotPassword = () => {

    
    const [email, setEmail] = useState('')
    
    


    const alert = useAlert();
    const dispatch = useDispatch();

   
    const { error, loading, message } = useSelector(state => state.forgotPassword);

    useEffect (() => {

     

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(message){
            alert.success(message)
        }



    }, [dispatch, alert, error, message])


    const submitHandler = (e) =>{
        e.preventDefault();


        const formData = new FormData();

    
        formData.set('email', email);
       

        dispatch(forgotPassword(formData))
    }

    return (
        <Fragment>
            <MetaData title = {'Forgot Password'}/>
            <Header/>
            <section className = "forgotpwd">
                <div className ="body">

                  <div className = "form-container">
                    <h1 className = "h1">Forgot Password</h1>
                    <form onSubmit = {submitHandler}>
                      <div className = "control">
                        <label htmlFor = "email_field">Email</label>

                        <input type= "email"
                          id = "email_field"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                          value= { email } 
                          onChange = {(e) => setEmail(e.target.value)}
                          placeholder = "example@gmail.com"
                          
                          />
                      </div> <br/>
                           
                      <div className = "control">
                        <input type = "submit" 
                        value = "Send"
                        disabled = {loading ? true: false}/>
                      </div>
                    </form>
                      <div className="link6">
                        <Link to="/register">Create New Account?</Link>
                      </div>
                   

                  </div>
                  
                </div>
                </section>
                    
            <Footer/>
        </Fragment>
    )
}

export default ForgotPassword
