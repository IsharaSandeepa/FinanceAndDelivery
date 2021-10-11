import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import '../style/login.css'


const Profile = () => {

    const { user, loading } = useSelector (state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader/> : (
                 <Fragment>
                    <MetaData title = {'My Profile'}/>
                    <Header/>
                    <section className= "myProfile">

                        <div class="wrapperDV">
                            <div class="leftPv">

                                <img src={user.avatar.url}
                                alt={user.first_name} 
                                width="100"/>
                                <p>{user.first_name}</p><br/>

                                <h4>My Profile</h4>
                                <p>Cup Cakes & Cackery</p><br/>

                                {user.role !== 'admin' && (
                                    <Link to="/orders/me" className="spd1 spd">My Orders</Link>
                                )}
                                <br/>
                                {user.role !== 'admin' && (
                                    <Link to="/Customer_Feedback" className="spd1 spd">My Feedback</Link>
                                )}
                                {user.role !== 'user' && (
                                    <Link to="/admin/Dashboard" className="spd1 spd">Admin Dashboard</Link>
                                )}
                                
                                
                        
                                <br/><br/>
                                <h4>joined at {String(user.createdAt).substring(0, 10)}</h4>
                            
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Personal Data</h3>
                                    <div class="info_data">

                                        <div class="data">
                                            <h4>First Name</h4>
                                            <p>{user.first_name}</p><br/>
                                            <h4>Birthday</h4>
                                            <p>{user.birthday}</p><br/>
                                            <h4>Gender</h4>
                                            <p>{user.gender}</p><br/>
                                            <h4>Address</h4>
                                            <p>{user.address}</p><br/>
                                        </div>
                                        
                                        <div class="data">
                                            <h4>Last Name</h4>
                                            <p>{user.last_name}</p><br/>
                                            <h4>Phone No</h4>
                                            <p>{user.phone_no}</p><br/>
                                            <h4>E-mail</h4>
                                            <p>{user.email}</p><br/>
                                        </div>
                                    </div>
                                </div>
                            
                                <br/><br/>
                                <div class="projects">
                                    <div class="projects_data">
                                        <div class="data">
                                            <div className ="link2">
                                            <button className="profileBtn"><Link to="/me/update" id="edit_profile"> Edit Profile</Link></button>
                                            </div>
                                        </div>
                                        <div class="data">
                                            <div className = "link2">
                                                <button className="profileBtn"><Link to="/password/update" > Change Password</Link></button>
                                            </div>
                                        </div>
                                    </div>
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


export default Profile