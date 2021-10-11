import React, { Fragment, useState, useEffect} from 'react'

//import '../style/register.css'

import '../style/login.css'
import MetaData from '../layout/MetaData'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'


const Register = ({ history}) => {

    const[user, setUser] =  useState({
        first_name : '',
        last_name : '',
        gender : '',
        birthday : '',
        address : '',
        phone_no : '',
        email : '',
        password : '',

    })

    const {first_name, last_name, gender, birthday, address, phone_no, email, password}  = user;

    //set the avatar
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    useEffect (() => {

        if(isAuthenticated){
            history.push('/me')
        }

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])


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
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
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

        if(e.target.name === 'avatar'){

            const reader = new FileReader();

            reader.onload = () =>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
        }else{

            setUser({ ...user, [e.target.name] : e.target.value})
        }


       
    } 

    return (
        <Fragment>
            <MetaData title = {'Register User'}/>
            <Header/>
            <section className ="myRegister">
            <div className = "body">

            <div className="form-container2">

                <div className="h1">Become Sweet Member</div>

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
                                    onChange = {onChange}  
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Last Name</span>
                                <input type="text"
                                    name = 'last_name' 
                                    placeholder="Last Name"
                                    value= {last_name}
                                    onChange = {onChange}  
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Birthday</span>
                                <input type="date"
                                    name = 'birthday'
                                    value= {birthday}
                                    onChange = {onChange} 
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Address</span>
                                <input type="text"
                                    name = 'address'
                                    placeholder = " Address"
                                    value= {address}
                                    onChange = {onChange}                                 
                                required/>
                            </div>


                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="number"
                                   
                                    name = 'phone_no'
                                    placeholder = " 0778542152"
                                    value= {phone_no}
                                    onChange = {onChange}   
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Email</span>
                                <input type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                name = 'email'
                                placeholder = " E-mail Address"
                                value= {email}
                                onChange = {onChange}  
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password"
                                    name = 'password'
                                    placeholder = " Password"
                                    value= {password}
                                    onChange = {onChange}   
                                required/>
                            </div>

                            <div className="input-box">
                                <span className="details1">Gender</span>
                                <select type="text"
                                    className = "selectDV1"
                                    name = 'gender'
                                    placeholder = " Male/Female"
                                    default = "male"
                                    value= {gender}
                                    onChange = {onChange} 
                                required>
                                     <option value="male">Male</option>
                                     <option value="female">Female</option>
                                    
                                </select>
                            </div>
                            
                            <div className="input-box">
                                <span className="details">Avatar</span>
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
                        value="Register"/>
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

export default Register
