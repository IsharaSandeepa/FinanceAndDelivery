import axios from 'axios' ;

import { 
   ALL_EMPLOYEES_REQUEST,
   ALL_EMPLOYEES_SUCCESS, 
   ALL_EMPLOYEES_FAIL ,
    //uda tika 18 
    NEW_EMPLOYEE_REQUEST,
    NEW_EMPLOYEE_SUCCESS, 
    NEW_EMPLOYEE_FAIL ,

    //update
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS, 
    UPDATE_EMPLOYEE_FAIL ,

    //delete
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL ,

    //details
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS, 
    EMPLOYEE_DETAILS_FAIL ,

    CLEAR_ERRORS}
    
    from '../constants/employeeConstants'

     //18 folder ek get all employees
    export const allEmployees = ( ) => async (dispatch) => {
       try{
           dispatch({ type: ALL_EMPLOYEES_REQUEST})
          // console.log("Reacher");

            const {data} = await axios.get ('/api/v1/employees') //methana poddk blnn

            dispatch ({
                type:ALL_EMPLOYEES_SUCCESS,
                payload: data.employees
            })

        }catch(error){
            dispatch({
                type: ALL_EMPLOYEES_FAIL,
                payload: error.response.data.message

            })
           
        }

    }

    export const newEmployee = ( employeeData) => async (dispatch) => {
        try{

            dispatch({ type: NEW_EMPLOYEE_REQUEST})
           // console.log("Reacher");
            const config = {
                Headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/v1/admin/employee/new', employeeData,config)

            dispatch ({
                type: NEW_EMPLOYEE_SUCCESS,
                payload: data.employee
            })

        }catch(error){
            dispatch({
                type: NEW_EMPLOYEE_FAIL,
                payload: error.response.data.message

            })
           
        }

    }

    //update
    export const updateEmployee = ( id, employeeData) => async (dispatch) => {
        try{

            dispatch({ type: UPDATE_EMPLOYEE_REQUEST})
          //  console.log("Reacher");
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }

            const {data} = await axios.put(`/api/v1/admin/employee/${id}`, employeeData,config)

            dispatch ({
                type: UPDATE_EMPLOYEE_SUCCESS,
                payload: data.success
            })

        }catch(error){
            dispatch({
                type: UPDATE_EMPLOYEE_FAIL,
                payload: error.response.data.message

            })
           
        }

    }
    

    export const getEmployeeDetails = (id) => async (dispatch) => {
        try{

            dispatch({ type: EMPLOYEE_DETAILS_REQUEST})
          //  console.log("Reacher");
           
            const {data} = await axios.get(`/api/v1/employee/${id}`)

            dispatch ({
                type: EMPLOYEE_DETAILS_SUCCESS,
                payload: data.employee
            })

        }catch(error){
            dispatch({
                type: EMPLOYEE_DETAILS_FAIL,
                payload: error.response.data.message

            })
           
        }

    }

    //delete user

    export const deleteEmployee = ( id) => async (dispatch) => {
        try{

            dispatch({ type: DELETE_EMPLOYEE_REQUEST})
          //  console.log("Reacher");
           
            const {data} = await axios.delete(`/api/v1/admin/employee/${id}`)

            dispatch ({
                type: DELETE_EMPLOYEE_SUCCESS,
                payload: data.success
            })

        }catch(error){
            dispatch({
                type: DELETE_EMPLOYEE_FAIL,
                payload: error.response.data.message

            })
           
        }

    }
    //clear errors

    export const clearErrors = () => async (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }