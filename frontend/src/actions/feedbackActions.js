import axios from 'axios';

import {
    ALL_FEEDBACKS_REQUEST, 
    ALL_FEEDBACKS_SUCCESS, 
    ALL_FEEDBACKS_FAIL,
    DELETE_ADMIN_FEEDBACK_REQUEST,
    DELETE_ADMIN_FEEDBACK_SUCCESS,
    DELETE_ADMIN_FEEDBACK_FAIL,
    ADMIN_FEEDBACK_REQUEST,
    ADMIN_FEEDBACK_SUCCESS,
    ADMIN_FEEDBACK_FAIL,
    CUSTOMER_FEEDBACKS_REQUEST,
    CUSTOMER_FEEDBACKS_SUCCESS,
    CUSTOMER_FEEDBACKS_FAIL,
    CUSTOMER_DELETE_FEEDBACKS_REQUEST,
    CUSTOMER_DELETE_FEEDBACKS_SUCCESS,
    CUSTOMER_DELETE_FEEDBACKS_FAIL,
    CUSTOMER_FEEDBACK_SINGLE_REQUEST,
    CUSTOMER_FEEDBACK_SINGLE_SUCCESS,
    CUSTOMER_FEEDBACK_SINGLE_FAIL,
    UPDATE_FEEDBACKS_REQUEST,
    UPDATE_FEEDBACKS_SUCCESS,
    UPDATE_FEEDBACKS_FAIL,
    CLEAR_ERRORS

} from '../constants/feedbackConstants'

export const getFeedbacks = (currentPage = 1) => async (dispatch) =>{
    try{

        dispatch({type:ALL_FEEDBACKS_REQUEST}) 

        const { data } = await axios.get(`/api/v1/feedbacks?page=${currentPage}`)

        dispatch({
            type: ALL_FEEDBACKS_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type:ALL_FEEDBACKS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getAdminFeedbacks = () => async (dispatch) => {
    try{

        dispatch({ type: ADMIN_FEEDBACK_REQUEST})

        const { data } = await axios.get(`/api/v1/admin/feedbacks`)

        dispatch({
            type: ADMIN_FEEDBACK_SUCCESS,
            payload: data.feedbackAdmin
        })

    } catch (error) {
        dispatch({
            type: ADMIN_FEEDBACK_FAIL,
            payload: error.response.data.message
        })
    }
}

export const adminDeleteFeedback = (id) => async (dispatch) => {
    try {

        dispatch({ type:  DELETE_ADMIN_FEEDBACK_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/feedbacks/${id}`)

        dispatch({
            type:  DELETE_ADMIN_FEEDBACK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type:  DELETE_ADMIN_FEEDBACK_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getCustomerFeedbacks = () => async (dispatch) => {
    try{

        dispatch({ type: CUSTOMER_FEEDBACKS_REQUEST})

        const { data } = await axios.get(`/api/v1/feedback/me`)

        dispatch({
            type: CUSTOMER_FEEDBACKS_SUCCESS,
            payload: data.customerFeedback
        })

    } catch (error) {
        dispatch({
            type: CUSTOMER_FEEDBACKS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getCustomerSingleFeedbacks = (id) => async (dispatch) => {
    try{

        dispatch({ type: CUSTOMER_FEEDBACK_SINGLE_REQUEST})

        const { data } = await axios.get(`/api/v1/feedbacks/${id}`)

        dispatch({
            type: CUSTOMER_FEEDBACK_SINGLE_SUCCESS,
            payload: data.singlefeedback
        })

    } catch (error) {
        dispatch({
            type: CUSTOMER_FEEDBACK_SINGLE_FAIL,
            payload: error.response.data.message
        })
    }
}


export const updateFeedback = (id, feedbackData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_FEEDBACKS_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/feedbackUpdate/${id}`, feedbackData, config)

        dispatch({
            type: UPDATE_FEEDBACKS_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_FEEDBACKS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const customerDeleteFeedback = (id) => async (dispatch) => {
    try {

        dispatch({ type:  CUSTOMER_DELETE_FEEDBACKS_REQUEST })

        const { data } = await axios.delete(`/api/v1/feedbackDelete/${id}`)

        dispatch({
            type:  CUSTOMER_DELETE_FEEDBACKS_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type:  CUSTOMER_DELETE_FEEDBACKS_FAIL,
            payload: error.response.data.message
        })
    }
}





export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}