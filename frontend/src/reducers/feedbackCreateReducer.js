import {
    FEEDBACK_CREATE_REQUEST,
    FEEDBACK_CREATE_SUCCESS,
    FEEDBACK_CREATE_FAIL,
    FEEDBACK_CREATE_RESET,
    CUSTOMER_FEEDBACKS_REQUEST,
    CUSTOMER_FEEDBACKS_SUCCESS,
    CUSTOMER_FEEDBACKS_FAIL,
    CUSTOMER_DELETE_FEEDBACKS_REQUEST,
    CUSTOMER_DELETE_FEEDBACKS_SUCCESS,
    CUSTOMER_DELETE_FEEDBACKS_FAIL,
    CUSTOMER_DELETE_FEEDBACKS_RESET,
    CUSTOMER_FEEDBACK_SINGLE_REQUEST,
    CUSTOMER_FEEDBACK_SINGLE_SUCCESS,
    CUSTOMER_FEEDBACK_SINGLE_FAIL,
    UPDATE_FEEDBACKS_REQUEST,
    UPDATE_FEEDBACKS_SUCCESS,
    UPDATE_FEEDBACKS_FAIL,
    UPDATE_FEEDBACKS_RESET,
    CLEAR_ERRORS

} from '../constants/feedbackConstants'

export const feedbackCreateReducers = (state= { newFeedbacks:{} },action) =>{
    switch(action.type){
        case FEEDBACK_CREATE_REQUEST:
            return{
                ...state,
                loading:true,

            }
        case FEEDBACK_CREATE_SUCCESS:
            return{
                loading:false,
                success:action.payload.success,
                newFeedbacks:action.payload.newFeedbacks
            }
        case FEEDBACK_CREATE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case FEEDBACK_CREATE_RESET:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }


        default: 
            return state;
    }

}
export const feedbackCustomerReducers = (state= { feedback:[] },action) =>{
    switch(action.type){

        case CUSTOMER_FEEDBACKS_REQUEST:
            return {
                loading:true,
                feedback:[]
            }

        case CUSTOMER_FEEDBACKS_SUCCESS:{
            return {
                loading: false,
                feedback: action.payload
                }
            }

        case CUSTOMER_FEEDBACKS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
            
            default:
            return state;
        
    }
}
export const SinglefeedbackCustomerReducers = (state= { feedback:{} },action) =>{
    switch(action.type){
        case CUSTOMER_FEEDBACK_SINGLE_REQUEST:

            return {
                ...state,
                loading:true

            }
        case CUSTOMER_FEEDBACK_SINGLE_SUCCESS:
            return {
                loading: false,
                feedback: action.payload
                }     
        case CUSTOMER_FEEDBACK_SINGLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
            
            default:
            return state;
        
    }
}
export const feedbackCustomerDeleteReducer = (state = {}, action) => {
    switch (action.type) {

        case CUSTOMER_DELETE_FEEDBACKS_REQUEST:

            return {
                ...state,
                loading: true
            }

        case CUSTOMER_DELETE_FEEDBACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case CUSTOMER_DELETE_FEEDBACKS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CUSTOMER_DELETE_FEEDBACKS_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const feedbackCustomerUpdateReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_FEEDBACKS_REQUEST:

            return {
                ...state,
                loading: true
            }

        case UPDATE_FEEDBACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case UPDATE_FEEDBACKS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_FEEDBACKS_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}