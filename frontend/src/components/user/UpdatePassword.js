import React, { Fragment, useState, useEffect} from 'react'



import MetaData from '../layout/MetaData'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'

import '../style/login.css'

const UpdatePassword = ({ history }) => {

    
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    


    const alert = useAlert();
    const dispatch = useDispatch();

   
    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect (() => {

     

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isUpdated){
            alert.success('Password updated successfully')
           

            history.push('/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }



    }, [dispatch, alert, error, history, isUpdated])


    const submitHandler = (e) =>{
        e.preventDefault();


        const formData = new FormData();

        formData.set('oldPassword', oldPassword);
        formData.set('password', password);
       

        dispatch(updatePassword(formData))
    }

   
    return (
        <Fragment>
            <MetaData title = {'Change Password'}/>
            <Header/>
            <section className ="myUpdatePwd">
            <div className = "body">


            <div className="form-container">

                <div className="h1">Update <br/>My Password</div>

                <div className="content">

                    

                    <form onSubmit = {submitHandler} >

                        <div className="user-details">
                            
                            <div className="control">
                                <span className="details"> Old Password</span>
                                <input type="password"
                                   
                                    placeholder = "Old Password"
                                    id="password_field"
                                    value={oldPassword}
                                    onChange = {(e) => setOldPassword(e.target.value)}  
                                required/>
                            </div>
                            

                            <div className="control">
                                <span className="details">New Password</span>
                                <input type="password"
                                   
                                    placeholder = "New Password"
                                    id="password_field"
                                    value={password}
                                    onChange = {(e) => setPassword(e.target.value)}  
                                required/>
                            </div>

                           
                            
                           

                        </div>
                        <br/>
                        <div className="controlUpdatePwd">
                        <input type="submit" 
                        disabled = {loading ? true : false}  
                        value="Update Password"/>
                        </div>
                    </form>
                </div>
            </div>

            </div>
            </section>
            <Footer/>
           
            
        </Fragment>
    )
}

export default UpdatePassword
