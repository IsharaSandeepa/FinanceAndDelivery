import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'//meka gena hoyannna

//seweet alert ekta delete ekata adalawa
import Swal from 'sweetalert2'


import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
//side bar eka import krnna Rshinthagen aran
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'
import '../style/login.css'


//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';



//import from shamalee
import jsPdf from 'jspdf';
import 'jspdf-autotable';



//end







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

    /*
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
    

    }*/



      
    
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
                /*{
                    label:'Action',
                    field:'actions',
                    
                    
                   
                },*/
                
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
                   
                    /*actions: <Fragment>
                        <Link to= {`/admin/user/${user._id}`} className = "btn btn-primary py-1 px-2 ml-1 mr-5" >
                            <i className =" fa fa-pencil" ></i>
                        
                         </Link>  
                         <button className= "btn btn-danger py-1 px-2 ml-5 mb-1"  onClick = {() => deleteUserHandler(user._id)}>
                             <i className = "fa fa-trash"></i>
                                                       
                         </button>
                         </Fragment> */

                })
            })
            return data;
      
        }
        


        //import report 
        function jsPdfGenerator  ()  {



            //alert("Done!", "Your Report is Downloding!", "success")
            Swal.fire({ 
                position: 'top-center', 
                icon: 'success', 
                title: 'Report Dowloaded Successfully', 
                showConfirmButton: false, 
                timer: 1500 })
        
        
        
            //new document in jspdf
        
            const doc = new jsPdf('l', 'pt', 'a3');
        
        
        
            doc.text(600, 20, 'User Details Report', { align: 'center' },);
        
            doc.autoTable({ html: '#User-table' })
        
        
        
            doc.autoTable({
        
              columnStyles: { europe: { halign: 'userDetailsPdf' } },
        
              margin: { top: 10 },
        
            })
        
        
        
            //save the pdf
        
            doc.save("User Details.pdf");
        
          }


        //end report






    return (
        <Fragment>
            <MetaData title = {'All Users'}/>
        <div className = "raw">
            <div className = "col-12 col-md-2">
                {/*navigation bar ekaclassName = "col-12 col-md-2"  */}
            </div>    
        

        {/*<div className = "col-12 col-md-10">*/}
        <div className = "allUserContainer">

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
                <div className ="test">
                <h1 className = "my-5" >ALL Users</h1>
                </div>





                

                {loading ? <Loader /> : (
                            <MDBDataTable
                                data={SetUsers()}
                                className="px-3"
                                bordered
                                striped
                                hover
                                id = 'User-table'
                                className = 'table'
                            />
                        )}
            
                    
           
            <button className="profileBtn" onClick ={jsPdfGenerator}> Generate Report PDF</button>
                   
                 
            </Fragment>

</div>
        {/*</div>*/}
        </div> 
            
        </Fragment>
    )
}

export default UsersList
