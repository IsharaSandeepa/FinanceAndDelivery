import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Rating, RatingView } from 'react-simple-star-rating'
import { useLocation } from 'react-router-dom'               

import MetaData from '../layout/MetaData'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import '../style/add_feedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newFeedbacks, clearErrors } from '../../actions/add_feedback_action' 


const Add_Feedback = ({match, history }) => {

    //const { orderId } = this.props.location.state
    const orderId = match.params.id;

    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0)

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newFeedbacks);

    useEffect(() => {

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if(success) {
            history.push('/Customer_Feedback');
            alert.success('Feedback Added successfully');

        }
    }, [dispatch, alert, error, success, history])

    const handleRating = (rating) => {
        setRating(rating)
        // Some logic
      }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('description', description);
        formData.set('name', name);
        formData.set('rating', rating);
        formData.set('orderId', orderId);


        dispatch(newFeedbacks(formData))
    }

  



    return (
                        <Fragment>
                            <MetaData title={'Give Feedback'}/>
                        <Helmet>
                            <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
                        </Helmet>
                        <Header/>
                    <div className="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
                        <form onSubmit={submitHandler} enctype='multipart/form-data'> 
                        <h1>...Give Us A Feedback...</h1>
                        <div>
                            <input type="hidden" name="_wpcf7" value="156"/>
                            <input type="hidden" name="_wpcf7_version" value="3.7.2"/>
                            <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f156-p143-o1"/>
                            <input type="hidden" name="_wpnonce" value="d1da331d93"/>
                        </div>
                        <p>
                            <center>
                        <h2>Order ID: {orderId}</h2></center>
                        <span className="wpcf7-form-control-wrap Name">
                            <input 
                            id="name"
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            size="40" 
                            className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required" 
                            aria-required="true" 
                            aria-invalid="false" 
                            placeholder="Enter Your Name"
                            required/>
                        </span>
                        </p>
                        
                            <h3>Rate Us...</h3>
                            <center>
                            <Rating  
                                size={60} 
                                onClick={handleRating} 
                                name="rating" 
                                ratingValue={rating}
                                emptyColor="#fff"
                                fillColor="#FAD230"
                                onChange={(e)=>setRating(e.target.value)}
                                required/>
                            </center>
                        <br/><br/>
                        <span className="wpcf7-form-control-wrap Message">
                            <textarea 
                            name="description"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            cols="40" rows="10" 
                            className="wpcf7-form-control wpcf7-textarea" 
                            aria-invalid="false" 
                            placeholder="Tell Us What You think...."></textarea>
                        </span>
                        
                        <input 
                        type="submit" 
                        value="Submit" 
                        disabled={ loading ? true:false }
                        className="wpcf7-form-control wpcf7-submit btn0001"/>
                    
                        <div className="wpcf7-response-output wpcf7-display-none">
                        </div>
                        
                </form>
                </div>
                <Footer/>
            </Fragment>

    )
}

export default Add_Feedback
