import { 

    //update 
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS, 
    UPDATE_EMPLOYEE_RESET,
    UPDATE_EMPLOYEE_FAIL ,

    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS, 
    EMPLOYEE_DETAILS_FAIL ,

    //delete
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS, 
    DELETE_EMPLOYEE_RESET,
    DELETE_EMPLOYEE_FAIL ,

    NEW_EMPLOYEE_REQUEST,
    NEW_EMPLOYEE_SUCCESS, 
    NEW_EMPLOYEE_FAIL ,
    //19folder
    ALL_EMPLOYEES_REQUEST,
   ALL_EMPLOYEES_SUCCESS, 
   ALL_EMPLOYEES_FAIL ,
    
    CLEAR_ERRORS
    
 }from '../constants/employeeConstants.js'

export const allEmployeesReducer = (state = { employees: [] }, action) => {
   
   switch (action.type){
           case ALL_EMPLOYEES_REQUEST:
               return{
                   ...state,
                   loading: true,
                  // employees: []
               }

           case ALL_EMPLOYEES_SUCCESS:
               return{
                   ...state,
                   loading: false,
                   employees: action.payload
                   
   
               }  
               
               case ALL_EMPLOYEES_FAIL:
                   return{
                       ...state,
                       loading: false,
                       error: action.payload, 
                      // employee: null,
                       
                   }

               case   CLEAR_ERRORS :
                   return{
                       ...state,
                       error:null
                   }

       default :
           return state;

   }
} 

export const newEmployeeReducer = (state = { employee: {} }, action) => {
   
    switch (action.type){
            case NEW_EMPLOYEE_REQUEST:
                return{
                    loading: true,
                    isAuthenticated: false,
                    
                }
 
            case NEW_EMPLOYEE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isAuthenticated: true,
                    employee: action.payload
    
                }  
                
                case NEW_EMPLOYEE_FAIL:
                    return{
                        ...state,
                        loading: false,
                        isAuthenticated: false,
                        employee: null,
                        error: action.payload,
                        
                    } 
 
                case   CLEAR_ERRORS :
                    return{
                        ...state,
                        error: null
                    }
 
        default :
            return state;
 
    }
 }
// update ek
 export const employeeReducer = (state = {} , action) => {
   
    switch (action.type){
            case UPDATE_EMPLOYEE_REQUEST:
            case DELETE_EMPLOYEE_REQUEST:
                return{
                    ...state,
                    loading: true
                }
 
            case UPDATE_EMPLOYEE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isUpdated: action.payload  
                } 
                
            case DELETE_EMPLOYEE_SUCCESS:    
                return{
                    ...state,
                    loading: false,
                    isDeleted: action.payload  
                }      
            
            case UPDATE_EMPLOYEE_RESET:    
                return{
                    ...state,
                    isUpdated: false
                }

            case DELETE_EMPLOYEE_RESET:    
                return{
                    ...state,
                    isDeleted: false
                }        
                
            case UPDATE_EMPLOYEE_FAIL:
            case DELETE_EMPLOYEE_FAIL:    
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                        
                    } 
 
                case   CLEAR_ERRORS :
                    return{
                        ...state,
                        error: null
                    }
 
        default :
            return state;
 
    }
 }

 export const employeeDetailsReducer = (state = { employee :{} } , action) => {
   
    switch (action.type){
                case EMPLOYEE_DETAILS_REQUEST:
                    return{
                        ...state,
                        loading: true,
                    }
    
                case EMPLOYEE_DETAILS_SUCCESS:
                    return{
                        ...state,
                        loading: false,
                        employee: action.payload
        
                    }  
               
                case EMPLOYEE_DETAILS_FAIL:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                        
                    } 
 
                case   CLEAR_ERRORS :
                    return{
                        ...state,
                        error: null
                    }
 
        default :
            return state;
 
    }
 }