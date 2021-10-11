import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Rating, RatingView } from 'react-simple-star-rating'

import MetaData from '../layout/MetaData'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../style/add_feedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateFeedback, getCustomerSingleFeedbacks, clearErrors } from '../../actions/feedbackActions' 
import { UPDATE_FEEDBACKS_RESET } from '../../constants/feedbackConstants'

const UpdateFeedback = ({match,history}) => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, feedback } = useSelector(state => state.singlefeedback)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.updateFeedback);

    const feedbackId = match.params.id;

    useEffect(() => {

        if(feedback && feedback._id !== feedbackId) {
            dispatch(getCustomerSingleFeedbacks(feedbackId));
        }else{
            setName(feedback.name);
            setRating(feedback.rating);
            setDescription(feedback.description);
        }
        
    
       

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
        if(updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }
        if(isUpdated) {
            history.push('/Customer_Feedback');
            alert.success('Feedback updated successfully');
            dispatch({ type: UPDATE_FEEDBACKS_RESET})
        }
    }, [dispatch, alert, error, isUpdated, history, updateError, feedback, feedbackId])

    const handleRating = (rating) => {
        setRating(rating)
        // Some logic
      }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('rating', rating);
        formData.set('description', description);

        dispatch(updateFeedback(feedback._id, formData))
    }
    




    return (
        <Fragment>
            <MetaData title={'Update Feedback'}/>
            <Helmet>
                            <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
                        </Helmet>
                        <Header/>
                    <div className="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
                        <form onSubmit={submitHandler} enctype='multipart/form-data'> 
                        <h1>...Update Feedback...</h1>
                        <div>
                            <input type="hidden" name="_wpcf7" value="156"/>
                            <input type="hidden" name="_wpcf7_version" value="3.7.2"/>
                            <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f156-p143-o1"/>
                            <input type="hidden" name="_wpnonce" value="d1da331d93"/>
                        </div>
                        <p>
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
                           
                            />
                        </span>
                        </p>
                        
                            <h3>Update Rate..</h3>
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
                            aria-invalid="false" p
                            placeholder="Tell Us What You think...."></textarea>
                        </span>
                        
                        <input 
                        type="submit" 
                        value="Update" 
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


export default UpdateFeedback
