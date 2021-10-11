import React, { Fragment, useState, useEffect} from 'react'



import MetaData from '../layout/MetaData'

import '../style/login.css'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AdminFooter from '../layout/AdminFooter';
import Admin_nav from '../layout/AdminNav';

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUserDetails, clearErrors } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'

const UpdateUser = ({history, match}) => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [phone_no, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector (state => state.userDetails);
    
    const userId = match.params.id;

    useEffect (() => {
        
        if(user && user._id !== userId){
                    dispatch(getUserDetails(userId))        
        }else {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setGender(user.gender);
            setBirthday(user.birthday);
            setAddress(user.address);
            setPhoneNo(user.phone_no);
            setEmail(user.email);
            setRole(user.role)
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isUpdated){
            alert.success('User updated successfully')
           

            history.push('/admin/users')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }



    }, [dispatch, alert, error, history, isUpdated, user, userId])


    const submitHandler = (e) =>{
        e.preventDefault();


        const formData = new FormData();

        formData.set('first_name', first_name);
        formData.set('last_name', last_name);
        formData.set('gender', gender);
        formData.set('birthday', birthday);
        formData.set('address', address);
        formData.set('phone_no', phone_no);
        formData.set('email', email);
        formData.set('role', role);

        dispatch(updateUser(user._id, formData))
    }

       
    return (
        <Fragment>
            <MetaData title = {'Update User'}/>
            <Header/>
            <section className="container_yo">
                    <Admin_nav/>
                </section>
                <section className="container55555">
            <div className = "raw">
                <div className = "sdsdd">
                    {/*sidebar*/}
                </div>

                <div className = "mddsfa-10">

                <section className ="myRegister1">
            <div className = "body">


            <div className="form-containerss2">

                <div className="h1123werwrwer">Update User Role</div>

                <div className="content">

                    

                    <form onSubmit = {submitHandler}  className = "rform">
                        

                        <div className="user-details">
        
                            <div className="input-box">
                                <span className="details">First Name</span>
                                <input type="text"
                                    name = 'first_name'
                                    placeholder="First Name"
                                    value= {first_name}
                                  
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Last Name</span>
                                <input type="text"
                                    name = 'last_name' 
                                    placeholder="Last Name"
                                    value= {last_name}
                                   
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Birthday</span>
                                <input type="date"
                                    name = 'birthday'
                                    value= {birthday}
                                   
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text"
                                    name = 'address'
                                    placeholder = " Address"
                                    value= {address}
                                                                   
                                required/>
                            </div>


                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number"
                                    name = 'phone_no'
                                    placeholder = " Phone Number"
                                    value= {phone_no}
                                    
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="email"
                                id="email_field"
                                name = 'email'
                                placeholder = " E-mail Address"
                                value= {email}
                              
                                required/>
        </div>
                            {/*
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password"
                                    name = 'password'
                                    placeholder = " Password"
                                    id="password_field"
                                    value= {password}
                                    onChange = {onChange}   
                                required/>
                            </div>
                            */}
            {/*
                            <div className="input-box">
                                <span className="details">Gender</span>
                                <select type="text"
                                    className = "selectDV"
                                    name = 'gender'
                                    value= {gender}
                                    onChange = {(e) => setGender(e.target.value)} 
                                required>
                                     <option value="male">Male</option>
                                     <option value="female">Female</option>
                                    
                                </select>
                            </div>

            */}
















                            <div className="input-box">
                            <span className="details">Role</span>
                                <select 
                                    className = "selectDV"
                                    name = 'role'
                                    
                                    value= {role}
                                    onChange = {(e) => setRole(e.target.value)} 
                                    required>
                                     <option value="admin">Admin</option>
                                     <option value="user">User</option>
                                    
                                </select>
                            </div>








                            
                        </div>
                        {/*<div className="gender-details">
                                <input type="radio" name="gender" id="dot-1"
                                value= {gender}
                                onChange = {onChange} />
                                <input type="radio" name="gender" id="dot-2"
                                value= {gender}
                                onChange = {onChange} />
                                <span className="gender-title">Gender</span>
                            <div className="category">
                                <label for="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                                </label>
                    
                            </div>
                            </div>*/}
                        <div className="button">
                        <input type="submit" 
                        
                        value="Update"/>
                        </div>
                    </form>
                </div>
            </div>

            </div>
            </section>

            







                </div>
            </div>

        </section>
      
        </Fragment>
    )
}

export default UpdateUser
