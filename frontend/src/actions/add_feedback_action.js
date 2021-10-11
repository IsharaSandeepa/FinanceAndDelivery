import axios from 'axios';

import {
    FEEDBACK_CREATE_REQUEST,
    FEEDBACK_CREATE_SUCCESS,
    FEEDBACK_CREATE_FAIL,
    CLEAR_ERRORS

} from '../constants/feedbackConstants'




export const newFeedbacks = (feedbackData) => async (dispatch) =>{
    try{

        dispatch({type:FEEDBACK_CREATE_REQUEST}) 

        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/newFeedbacks',feedbackData,config)

        dispatch({
            type: FEEDBACK_CREATE_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type:FEEDBACK_CREATE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}