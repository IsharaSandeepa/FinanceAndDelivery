import React,{Fragment, useState,  useEffect} from 'react'
import Pagination from 'react-js-pagination'
import {Helmet} from "react-helmet";
import { RatingView } from 'react-simple-star-rating'

import MetaData from '../layout/MetaData'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Loader from "../layout/Loader";

import '../style/review.css';
import '../style/home.css';


import{ useDispatch, useSelector} from 'react-redux'
import {getFeedbacks,clearErrors } from '../../actions/feedbackActions'
import{useAlert} from 'react-alert'


const Review = () => {
                          
    const [currentPage, setCurrentPage] = useState(1)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, feedbacks, error, feedbacksCount, resFeedbacksPerPage } = useSelector(state => state.feedbacks)

    useEffect(() =>{
        if(error){
            return alert.error(error);

        }
        dispatch(getFeedbacks(currentPage));
        

    }, [dispatch,alert, error,currentPage]) 

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            <MetaData title={'Reviews'} />
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
            <Helmet>
                <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
            </Helmet>
            <Header/>
            {loading ? <Loader/> : (
                <Fragment>
                    <section className="container_yo">
                {feedbacks && feedbacks.map(feedbacks =>(
                    <div key={feedbacks._id} class="container101">
                        <section className="component">
                        <blockquote className="callout quote EN">
                        <br/>
                        <RatingView 
                            size={40}
                            ratingValue={feedbacks.rating}/><br/>
                            <br/>
                            {feedbacks.description}
                        <cite> -<i><b>{feedbacks.name}</b></i></cite>
                        </blockquote>
                  </section>
                  </div>
                ))}
                </section>

            
                

                <div className="d-flex justify-content-center mt-5">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resFeedbacksPerPage}
                    totalItemsCount={feedbacksCount}
                    onChange={setCurrentPageNo}
                    nextPageText={'Next'}
                    prevPageText={'Prev'}
                    firstPageText={'First'}
                    lastPageText={'Last'}
                    itemClass="page-item"
                    linkClass="page-link"
                />
                </div>
                



                </Fragment>
            )}
            
            <Footer/>
            </Fragment>
    )
}


export default Review
