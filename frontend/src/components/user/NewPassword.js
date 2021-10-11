import React, { Fragment, useState, useEffect} from 'react'



import MetaData from '../layout/MetaData'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../actions/userActions'

import '../style/login.css'

const NewPassword = ({ history, match }) => {//match use to get the ID or TOKEN from the URL

      
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    


    const alert = useAlert();
    const dispatch = useDispatch();

   
    const { error, success } = useSelector(state => state.forgotPassword);

    useEffect (() => {

     

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(success){// password eka hriiyta change unoth 
            alert.success('Password reset successfuly')
            history.push('/login')//logwenna kiyaal kiynwa aye aluth passwords ghla
        }



    }, [dispatch, alert, error, success, history])


    const submitHandler = (e) =>{
        e.preventDefault();


        const formData = new FormData();

    
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);
       

        dispatch(resetPassword(match.params.token, formData))//this not a uthonticaeted token eka pasword reset token ekak withry
    }




    return (
        <Fragment>

             <MetaData title = {'New password Reset'}/>
             <Header/>
                <section className = "forgotpwd">
                    <div className ="body">

                    <div className = "form-container3">
                        <h1 className = "h1">Create<br/> New Password</h1>
                        <form onSubmit = {submitHandler}>
                        <div className = "control">
                            <label htmlFor = "password_field">Password</label>

                            <input type= "password"
                            id = "password_field"
                            value={password}
                            onChange ={(e) => setPassword(e.target.value)}
                            placeholder = "Enter New Password Here"
                            required
                            />
                        </div> <br/>

                        <div className = "control">
                            <label htmlFor = "confirm_password_field">Confirm Password</label>

                            <input type= "password"
                            id = "confirm_password_field"
                            value={confirmPassword}
                            onChange ={(e) => setConfirmPassword(e.target.value)}
                            placeholder = "Retype Your Password Here"
                            required
                            />
                        </div> <br/>
                            
                        <div className = "control">
                            <input type = "submit" 
                            value = "Set Password"
                           />
                        </div>
                        </form>
                       

                    </div>
                    
                    </div>
                </section>
                
<Footer/>

        </Fragment>
    )
}

export default NewPassword
