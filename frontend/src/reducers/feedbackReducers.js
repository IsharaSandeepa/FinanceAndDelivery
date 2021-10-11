import {
    ALL_FEEDBACKS_REQUEST, 
    ALL_FEEDBACKS_SUCCESS, 
    ALL_FEEDBACKS_FAIL,
    DELETE_ADMIN_FEEDBACK_REQUEST,
    DELETE_ADMIN_FEEDBACK_SUCCESS,
    DELETE_ADMIN_FEEDBACK_RESET,
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
    CUSTOMER_DELETE_FEEDBACKS_RESET,
    CLEAR_ERRORS

} from '../constants/feedbackConstants'


export const feedbackReducers = (state= { feedbacks:[] },action) =>{
    switch(action.type){
        case ALL_FEEDBACKS_REQUEST:
        case ADMIN_FEEDBACK_REQUEST:
            return {
                loading:true,
                feedbacks:[]
            }
        
        case ALL_FEEDBACKS_SUCCESS:
            return{
                loading:false,
                feedbacks:action.payload.feedbacks,
                feedbacksCount:action.payload.feedbacksCount,
                resFeedbacksPerPage: action.payload.resFeedbacksPerPage
            }

        case ADMIN_FEEDBACK_SUCCESS:{
            return {
                loading: false,
                feedbacks: action.payload
                }
            }
        case ADMIN_FEEDBACK_FAIL:
        case ALL_FEEDBACKS_FAIL:
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

export const feedbackAdminDeleteReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_ADMIN_FEEDBACK_REQUEST:

            return {
                ...state,
                loading: true
            }

        case DELETE_ADMIN_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_ADMIN_FEEDBACK_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_ADMIN_FEEDBACK_RESET:
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



