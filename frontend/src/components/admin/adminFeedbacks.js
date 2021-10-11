import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import Swal from "sweetalert2";  

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'



import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminFeedbacks, adminDeleteFeedback, clearErrors } from '../../actions/feedbackActions' 
import { DELETE_ADMIN_FEEDBACK_RESET } from '../../constants/feedbackConstants'


const AdminFeedbacks = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, feedbacks,feedbackCount } = useSelector(state => state.feedbacks);
    const { error: deleteError, isDeleted } = useSelector(state => state.adminDelete);


    useEffect(() => {
        dispatch(getAdminFeedbacks());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success('Feedback deleted successfully');
            history.push('/Admin_Feedback');
            dispatch({ type: DELETE_ADMIN_FEEDBACK_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setFeedback = () => {
        const data = {
            columns: [
                {
                    label: 'Order ID',
                    field: 'orderid',
                    sort: 'asc'
                },
                {
                    label: 'Feedback ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
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
        
    
        
        feedbacks.forEach(feedbacks => {
            data.rows.push({
                id:feedbacks._id,
                orderid:feedbacks.orderId,
                rating: feedbacks.rating,
                name: feedbacks.name,
                description: feedbacks.description,
                actions: 
                    <Fragment>
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
                dispatch(adminDeleteFeedback(id))
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
            <MetaData title ={'Admin Feedbacks'}/>
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
                    <Admin_nav/>
                </section>
  
                <section className="container55555">
                    <h1>All Feedbacks</h1>

                            {loading ? <Loader /> :(
                                <MDBDataTable
                                    data={setFeedback()}
                                    borderless
                                    striped
                                    hover
                                />
                            )}
                </section>
                
            </Fragment>
        </Fragment>
    )
}

export default AdminFeedbacks
 