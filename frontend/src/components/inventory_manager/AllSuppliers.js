import React, { Fragment, useEffect } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'
import { Link } from 'react-router-dom';

import MetaData from './MetaData';
import Loader from '../layout/Loader';
// import Admin_nav from './AdminNav';
import Admin_nav from '../layout/AdminNav';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getSuppliers, deleteSupplier } from '../../actions/supplierActions'

import { Router, Route } from 'react-router-dom' //search
import Search2 from './Search2';         //search

import Swal from 'sweetalert2'
import { DELETE_SUPPLIERS_RESET } from '../../constants/supplierConstants';


export const AllSuppliers = ({match, history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, suppliers, error, totSuppliers, isDeleted } = useSelector(state => state.suppliers )

    const keyword2 = match.params.keyword2 //search

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }

        if(isDeleted) {
            history.push("/all_suppliers");
            dispatch({type: DELETE_SUPPLIERS_RESET })
        }

        dispatch(getSuppliers(keyword2)); //from supplierActions //search
            
    }, [dispatch, alert, error, keyword2, isDeleted, history])


    const deleteSupplierHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This operation cannot be undone",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showConfirmButton: true,
            // confirmButtonText: 'Yes, Delete it!',
            // imageUrl: '../images/uovBaking.png',
            imageWidth: 300,
            imageHeight: 300,
        }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteSupplier(id))
            Swal.fire(
                'Cancelled!',
                'Your Order has been Cancelled.',
                'success',
                
            )
            }
        })

    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <Fragment >
            <MetaData title={'All Suppliers'} />
            {loading? <Loader /> : (
                
                <Fragment>
                <Header/>
            <section className="container_yo">
                <Admin_nav/>
            </section>
            <section className="container555424452345255">

                    <Route render={({history}) => <Search2 history={history} /> } />
                    <div className="container-fluid">
                    <table className="tableContainerThiran">
                    
                        <tr className="responsive-table ulThiran" >
                            <td className="col col-1">Supplier ID</td>
                            <td className="col col-2">Supplier Name</td>
                            <td className="col col-3">Supplier NIC</td>
                            <td className="col col-4">Supplier Account No</td>
                            <td className="col col-5">Supplier Gender</td>
                            <td className="col col-6">Supplier Contact No:</td>
                            <td className="col col-7">Supplier Email Address:</td>
                            <td className="col col-8">Actions</td>
                        </tr>

                        {suppliers && suppliers.map(suppliers => (                  
                        <tr key={suppliers._id}>
                            <td className="col col-1" data-label="Supplier ID" >{suppliers._id}</td>
                            <td className="col col-2" data-label="Supplier Name">{suppliers.supplier_name}</td>
                            <td className="col col-3" data-label="Supplier NIC">{suppliers.supp_nic}</td>
                            <td className="col col-4" data-label="Supplier Account No:">{suppliers.acct_no}</td>
                            <td className="col col-5" data-label="Supplier Gender">{suppliers.supp_gender}</td>
                            <td className="col col-6" data-label="Supplier Contact No:">{suppliers.supp_contact_no}</td>
                            <td className="col col-7" data-label="Supplier Email Address:">{suppliers.supp_email} </td>
                            <td className="col col-8">
                                    
                            <button className="deleteButtonThiran" onClick={() => deleteSupplierHandler(suppliers._id)}>DELETE</button>

                            <button className="updateButtonThiran">UPDATE</button>
                            </td>
                        </tr>
                        ))}

                    </table>

                    <button onClick={ ()=> topFunction() } className="toTheTop" style={{marginLeft:"92%"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                        <br/>
                            
                    </button>
                </div>
                </section>
                </Fragment>
            )}
        </Fragment>
    )

}

<Router>
  <Route path="all_suppliers/after_deletion" component={AllSuppliers} exact />
</Router>