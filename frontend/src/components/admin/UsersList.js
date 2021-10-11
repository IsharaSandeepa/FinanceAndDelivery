import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'//meka gena hoyannna

//seweet alert ekta delete ekata adalawa
import Swal from 'sweetalert2'


import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AdminFooter from '../layout/AdminFooter';
import Admin_nav from '../layout/AdminNav';

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

//side bar eka import krnna Rshinthagen aran
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'
import '../style/login.css'


//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';



const UsersList = ({ history }) => {


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users  } = useSelector (state => state.allUsers);
    const {isDeleted } = useSelector(state => state.user)

    useEffect(() =>{
       
       dispatch(allUsers());

        if(error){
         

            alert.error(error);
            dispatch(clearErrors())
        }


        if(isDeleted){
            alert.success('User Delete Successfuly');
            history.push('/admin/users');
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])


    const deleteUserHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id))
              Swal.fire(
                  
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    

    }


    //meee
    


    //meee

      

    const SetUsers = () => {

        const data = {
            columns: [
                {
                    label:'User ID',
                    field:'id',
                    sort:'asc',
                    
                    
                },
                {
                    label:'First Name',
                    field:'first_name',
                    sort:'asc',
                    
                },
                {
                    label:'Last Name',
                    field:'last_name',
                    sort:'asc'
                },
                {
                    label:'Gender',
                    field:'gender',
                    sort:'asc'
                },
                {
                    label:'Birthday',
                    field:'birthday',
                    sort:'asc'
                },
                {
                    label:'Address',
                    field:'address',
                    sort:'asc'
                },
                {
                    label:'Phone Number',
                    field:'phone_no'
                    
                },
                {
                    label:'Email Address',
                    field:'email',
                    sort:'asc'
                },
                {
                    label:'Role',
                    field:'role',
                    sort:'asc'
                },
                {
                    label:'Action',
                    field:'actions',
                    width: 15
                    
                   
                },
                
            ],

            rows: []
        }
            users.forEach(user => {
                data.rows.push({
                    id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    gender: user.gender,
                    birthday: user.birthday,
                    address: user.address,
                    phone_no: user.phone_no,
                    email: user.email,
                    role: user.role,
                   
                    actions: <Fragment>
                        <Link to= {`/admin/user/${user._id}`} className = "btn btn-primary py-1 px-2 ml-1 mr-5" >
                            <i className =" fa fa-pencil" ></i>
                         </Link> 

                         <button className= "btn btn-danger py-1 px-2 ml-5 mb-1"  onClick = {() => deleteUserHandler(user._id)}>
                         <i className="fas fa-trash-alt"></i>
                                                       
                         </button>
                         </Fragment> 

                })
            })
            return data;
      
        }






    return (
        <Fragment>
            <MetaData title = {'All Users'}/>
        
        
        <script src="https://kit.fontawesome.com/48ca456f8a.js" ></script>
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
                <section className="container55542445234535255">
                
                <h1 className = "my-5" >ALL Users</h1>

                {loading ? <Loader /> : (
                            <MDBDataTable
                                data={SetUsers()}
                                //className="px-3"
                                bordered
                                striped
                                hover
                                fixed
                                className='your-custom-styles'
                                
                            />
                        )}
            
                    
                
                   </section>
                
            </Fragment>
        </Fragment>
    )
}

export default UsersList
