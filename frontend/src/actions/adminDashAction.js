import axios from 'axios';

import {
    ORDER_COUNT_REQUEST,
    ORDER_COUNT_SUCCESS,
    ORDER_COUNT_FAIL,

    FEEDBACK_COUNT_REQUEST,
    FEEDBACK_COUNT_SUCCESS, 
    FEEDBACK_COUNT_FAIL,

    OFFER_COUNT_REQUEST ,
    OFFER_COUNT_SUCCESS ,
    OFFER_COUNT_FAIL ,

    USER_COUNT_REQUEST ,
    USER_COUNT_SUCCESS ,
    USER_COUNT_FAIL ,

    PRODUCT_COUNT_REQUEST,
    PRODUCT_COUNT_SUCCESS ,
    PRODUCT_COUNT_FAIL,

    COUNT_REQUEST,
    COUNT_SUCCESS,
    COUNT_FAIL,
    CLEAR_ERRORS
    

} from '../constants/adminDashCountConstant'


export const getCount = () => async (dispatch) => {
    try{

        dispatch({ type: FEEDBACK_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/count`)

        dispatch({
            type: FEEDBACK_COUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FEEDBACK_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getFeedbacksCount = () => async (dispatch) => {
    try{

        dispatch({ type: FEEDBACK_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/feedbackCount`)

        dispatch({
            type: FEEDBACK_COUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FEEDBACK_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getUsersCount = () => async (dispatch) => {
    try{

        dispatch({ type: USER_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/userCount`)

        dispatch({
            type: USER_COUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getOffersCount = () => async (dispatch) => {
    try{

        dispatch({ type: OFFER_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/offerCount`)

        dispatch({
            type: OFFER_COUNT_SUCCESS,
            payload: data.offersCount
        })

    } catch (error) {
        dispatch({
            type: OFFER_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductsCount = () => async (dispatch) => {
    try{

        dispatch({ type: PRODUCT_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/productCount`)

        dispatch({
            type: PRODUCT_COUNT_SUCCESS,
            payload: data.productsCount
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getOdersCount = () => async (dispatch) => {
    try{

        dispatch({ type: ORDER_COUNT_REQUEST})

        const { data } = await axios.get(`/api/v1/orderCount`)

        dispatch({
            type: ORDER_COUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_COUNT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}
