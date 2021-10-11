import React, { Fragment, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable} from 'mdbreact'
import Swal from "sweetalert2";  
import {Helmet} from "react-helmet";
import { RatingView } from 'react-simple-star-rating'



import MetaData from '../layout/MetaData';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/customerfeedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerFeedbacks, customerDeleteFeedback, clearErrors } from '../../actions/feedbackActions' 
import { CUSTOMER_DELETE_FEEDBACKS_RESET } from '../../constants/feedbackConstants'

const CustomerFeedbacks = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, feedback } = useSelector(state => state.customerFeedback);
    const { error: deleteError, isDeleted } = useSelector(state => state.adminDelete);

    useEffect(() => {
        dispatch(getCustomerFeedbacks());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            history.push('/Customer_Feedback');
            alert.success('Feedback deleted successfully');
            dispatch({ type: CUSTOMER_DELETE_FEEDBACKS_RESET })
        }

    }, [dispatch, alert, error, deleteError,isDeleted,history])

    const customerFeedback = () => {
        
        const data = {
            columns: [
                {
                    label: 'Order Id',
                    field: 'orderId',
                    sort: 'asc'
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc'
                },

                {
                    label: 'Description',
                    field: 'description',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort:'asc'
                },
            ],
            rows: []

        }
        
    
        
        feedback.forEach(feedbacks => {
            data.rows.push({
                orderId:feedbacks.orderId,                
                rating: <RatingView 
                size={40}
                ratingValue={feedbacks.rating}/>,
                description: feedbacks.description,
                actions: 
                    <Fragment>
                        <Link to={`/Update_Feedback/${feedbacks._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() =>deleteFeedbackHandler(feedbacks._id)}>
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </Fragment>
            })
        })
        
        return data;
    }
    const deleteFeedbackHandler = (id) => {

        Swal.fire({
            title:'Are You Sure?',
            text:"You won't able to revert this!",
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then((result) =>{
            if(result.isConfirmed){
                dispatch(customerDeleteFeedback(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'

                )
            }
        })
        
    }
    

    return (
        <Fragment>
            <Helmet>
                <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
            </Helmet>
            <MetaData title ={'My Feedbacks'}/>
            <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                                    />
                                    <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                                />
                                    <link
                                    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
                                    rel="stylesheet"
                                    type="text/css"
                                   /> 
            <Fragment>
                <Header/>
                <section className="container_yo">
                    <h1 className="h12">My Feedbacks</h1><br/><br/> </section>
                    <section className="container_yo123yo">
                            {loading ? <Loader /> :(
                                <MDBDataTable className="w-100 p-3"
                                    data={customerFeedback()}
                                    borderless
                                    striped
                                    hover
                                    fixed 
                                />
                            )}
                </section>
            </Fragment>
        </Fragment>
    )
}

export default CustomerFeedbacks
 