
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
    CLEAR_ERRORS
    

} from '../constants/adminDashCountConstant'



export const countReducers = (state= {},action) =>{
    switch(action.type){
        case ORDER_COUNT_REQUEST:
        case FEEDBACK_COUNT_REQUEST:
        case OFFER_COUNT_REQUEST:
        case USER_COUNT_REQUEST:
        case PRODUCT_COUNT_REQUEST:
            return {
                loading:true,
                
            }
        case ORDER_COUNT_SUCCESS:
        case FEEDBACK_COUNT_SUCCESS:
        case OFFER_COUNT_SUCCESS:
        case USER_COUNT_SUCCESS:
        case PRODUCT_COUNT_SUCCESS:
            return{
                loading:false,
                feedbacksCount:action.payload.feedbacksCount,
                usersCount:action.payload.usersCount,
                offersCount:action.payload.offersCount,
                odersCount:action.payload.odersCount,
                totalAmount:action.payload.totalAmount,
                productsCount:action.payload.productsCount

            }

        case ORDER_COUNT_FAIL:
        case OFFER_COUNT_FAIL:
        case USER_COUNT_FAIL:
        case PRODUCT_COUNT_FAIL:
        case FEEDBACK_COUNT_FAIL:
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