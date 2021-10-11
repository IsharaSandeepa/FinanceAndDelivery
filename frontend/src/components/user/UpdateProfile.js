import React, { Fragment, useState, useEffect} from 'react'


import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MetaData from '../layout/MetaData'

import '../style/login.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_RESET } from '../../constants/userConstants'


const UpdateProfile = ( { history }) => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [phone_no, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector (state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect (() => {

        if(user){
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setGender(user.gender);
            setBirthday(user.birthday);
            setAddress(user.address);
            setPhoneNo(user.phone_no);
            setEmail(user.email);
            setAvatarPreview(user.avatar.url);
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isUpdated){
            alert.success('User updated successfully')
            dispatch(loadUser()); 

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }



    }, [dispatch, alert, error, history, isUpdated])


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
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData))
    }

        /*avater nethuwa data ywnanm meka hri guya gooleekn 
        const payload = {
            first_name,
            last_name,
            gender,
            birthday,
            address,
            phone_no,
            email,
            password
        }

        dispatch(register(payload))
    }
        */


    const onChange = e =>{

       

            const reader = new FileReader();

            reader.onload = () =>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
       


       
    } 


    return (
        <Fragment>
            <MetaData title = {'Update My Profile'}/>
            <Header/>
            <section className ="myRegister">
            <div className = "body">


            <div className="form-container2">

                <div className="h1">Update My Profile</div>

                <div className="content">

                    <div className = "avatarContent">
                        <img
                            src={avatarPreview}
                            class="avatar1"
                            alt='Avatar Priview'
                        />
                    </div>

                    <form onSubmit = {submitHandler} encType='multipart/form-data' className = "rform">

                        <div className="user-details">

                            <div className="input-box">
                                <span className="details">First Name</span>
                                <input type="text"
                                    name = 'first_name'
                                    placeholder="First Name"
                                    value= {first_name}
                                    onChange = {(e) => setFirstName(e.target.value)}  
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Last Name</span>
                                <input type="text"
                                    name = 'last_name' 
                                    placeholder="Last Name"
                                    value= {last_name}
                                    onChange = {(e) => setLastName(e.target.value)}   
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Birthday</span>
                                <input type="date"
                                    name = 'birthday'
                                    value= {birthday}
                                    onChange = {(e) => setBirthday(e.target.value)} 
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Address</span>
                                <input type="text"
                                    name = 'address'
                                    placeholder = " Address"
                                    value= {address}
                                    onChange = {(e) => setAddress(e.target.value)}                                  
                                required/>
                            </div>


                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number"
                                    name = 'phone_no'
                                    placeholder = " Phone Number"
                                    value= {phone_no}
                                    onChange = {(e) => setPhoneNo(e.target.value)}    
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Email</span>
                                <input type="email"
                                name = 'email'
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                placeholder = " E-mail Address"
                                value= {email}
                                onChange = {(e) => setEmail(e.target.value)}  
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

                            <div className="input-box">
                                <span className="details">Gender</span>
                                <select type="text"
                                    className = "selectDV1"
                                    name = 'gender'
                                    value= {gender}
                                    onChange = {(e) => setGender(e.target.value)} 
                                required>
                                     <option value="male">Male</option>
                                     <option value="female">Female</option>
                                    
                                </select>
                            </div>

                            
                            <div className="input-box">
                                <span className="details1">Avatar</span>
                                {/*<img
                                            src={avatarPreview}
                                            class="avatar1"
                                            alt='Avatar Priview'
                                />*/}
                                <input
                                    type='file'
                                    name='avatar'
                                    accept = "images/*"
                                    onChange = {onChange}
                                />

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
                        disabled = {loading ? true : false}  
                        value="Update"/>
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

export default UpdateProfile
