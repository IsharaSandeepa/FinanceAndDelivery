
import React,{Fragment} from 'react'
import {  Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {Helmet} from "react-helmet";

import { logout } from  '../../actions/userActions'




import '../style/header.css'


const Header = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const {cartItems} = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }


    return (
        <Fragment>
                <Helmet>
                
                <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
            </Helmet>

            
            <div className="container5555">
            
                <div className="navbar">
                    <nav>
                        <ul >
                            <li><Link to="/cart" style={{textDecoration:'none'}}>
                                <div className="cart1122335522">
                                 <i class="fas fa-shopping-cart"></i>&nbsp;
                                {cartItems.length}
                                </div>
                                </Link>
         </li>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/offers">OFFERS</Link></li>
                            <img src="/images/cupcakes_(2).gif" className="logoheader"></img>
                            <li><a href="/review">REVIEWS</a></li>
                            <li><Link to="/me">PROFILE</Link></li>
                            <li><div className = "loginCon">

{user ?(
         <div>

           

            <Link to="/me" type ="button" className = "spd1">
                <figure >
                    <img
                        src = {user.avatar && user.avatar.url}
                        alt = {user && user.first_name}
                        className ="avatar"
                    />     
                </figure>
                <span className = "spd">{user && user.first_name}</span>

                </Link>
                {/*
                {user && user.role !== 'admin' ? (
                    <Link to = "#" className = "spd">My Order</Link>
                ): (
                    <Link to = "#"  className = "spd">Admin Dashboard</Link>
                )}
                */}

                <div  className = "" aria-labelledby = "dropDownMenuButton">
                    <Link to ="/login"  className = "spd" onClick = {logoutHandler}>
                        Logout
                    </Link>

                </div>
        {/* cartButton */}


            </div>
        ) : !loading && <Link to="/login" className = "spd">LOGIN</Link>}
</div></li>
                        </ul>
                    </nav> 

                </div>
                

            </div> 
            <br/><br/><br/><br/><br/>
        </Fragment>
    )
}

export default Header