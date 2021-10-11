import React, { Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../style/login.css'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'
 

const Login = ({ history,location }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    useEffect (() => {

      //from order component Ishara
      const redirect = location.serach ? location.search.split('=')[1] : '/'

        if(isAuthenticated){
            history.push(redirect)
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])


    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(login(email, password))
    }




    return (
      <Fragment>
          {loading ? <Loader/> : (
              <Fragment>
                <MetaData title = {'Login'}/>
                <Header/>
                <section className = "mylogin">
                <div className ="body">

                  <div className = "form-container">
                    <h1 className = "h1">Sign In</h1>
                    <form className="prabhashform" onSubmit = {submitHandler}>
                      <div className = "control">
                        <label htmlFor = "email_field">Email</label>
                        <input type= "email"
                          name = "name"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                          id = "email_field"
                          value= { email } 
                          onChange = {(e) => setEmail(e.target.value)}
                          placeholder = "example@gmail.com"
                          
                          />
                      </div>

                      <div className = "control">
                        <lable for= "psw">Password</lable>
                        <input type = "password"
                         name = "psw" 
                         id ="password_field"
                         value= { password } 
                         onChange = {(e) => setPassword(e.target.value)} 
                         placeholder="*************"
                         
                         />
                      </div>

                      <div className="link">
                        <Link to="/password/forgot">Forgot password</Link>
                      </div>
                      
                      <div className = "control">
                        <input type = "submit" value = "Login"/>
                      </div>
                    </form>
                      <div className="link">
                        <Link to="/register">New User?</Link>
                      </div>
                   

                  </div>
                  
                </div>
                </section>
              <Footer/>
              </Fragment>
        )}

      </Fragment>
    )
}

export default Login
 