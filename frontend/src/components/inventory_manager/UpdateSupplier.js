import React, { Fragment, useState, useEffect } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'

import Header from '../layout/Header'
import MetaData from './MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateSuppliers, clearErros, getSingleSupplier } from '../../actions/supplierActions'

import { UPDATE_SUPPLIERS_RESET } from '../../constants/supplierConstants'

export const UpdateSupplier = ({ match, history }) => {

    const [name, setSName] = useState('');
    const [nic, setSNIC] = useState('');
    const [contact, setSContact] = useState('');
    const [email, setSEmail] = useState('');
    const [gender, setSGender] = useState('');
    const [account, setSAcct] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    
    
    const { error, Ssupplier } = useSelector(state => state.supplierDetails );
    

    //update
    const { loading, error: updateError, isUpdated } = useSelector(state => state.change_suppliers);
    
    // const { name, nic, contact, email, gender, account } = supplier;
    
    //for getting the supplier id
    const supplierID = match.params.id;

    useEffect(() =>{
        // console.log(supplierID)
        if(Ssupplier && Ssupplier._id !== supplierID) {

            dispatch(getSingleSupplier(supplierID));
            alert.success(JSON.stringify(Ssupplier));

            // const { supplier_name, supp_nic, supp_contact_no, supp_email, supp_gender, acct_no } = supplier;

        } 
        else {

            // setSName( Ssupplier.supplier_name);
            // setSNIC( Ssupplier.supp_nic);
            // setSContact( Ssupplier.supp_contact_no);
            // setSEmail( Ssupplier.supp_email);
            // setSGender( Ssupplier.supp_gender);
            // setSAcct( Ssupplier.acct_no);
            // Ssupplier && Ssupplier.map(Ssupplier);

            alert.success(JSON.stringify(Ssupplier));
            
            setSName('Dasun')
            setSNIC('123456789V')
            setSContact('0987654321')
            setSEmail('dasun@gmail.com')
            setSGender('Male')
            setSAcct('12345678')

        }
        
        if(error) {
            alert.error(error);
            dispatch(clearErros());
        }

        if(updateError) {
            alert.error(updateError);
            dispatch(clearErros());
        }

        if(isUpdated) {
            history.push('/all_suppliers')
            alert.success('Supplier updated successfully')
            dispatch({
                type: UPDATE_SUPPLIERS_RESET
            })
        }
        dispatch(getSingleSupplier(match.params.id));


    }, [dispatch, alert, error, isUpdated, history, updateError,  Ssupplier, supplierID ] )
    // }, [dispatch, history, match.params.id])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('supplier_name', name);
        formData.set('supp_nic', nic);
        formData.set('supp_contact_no', contact);
        formData.set('supp_email', email);
        formData.set('supp_gender', gender);
        formData.set('acct_no', account);
        // formData.set(name, supplier.supplier_name);
        // formData.set(nic, supplier.supp_nic);
        // formData.set(contact, supplier.supp_contact_no);
        // formData.set(email, supplier.supp_email);
        // formData.set(gender, supplier.gender);
        // formData.set(account, supplier.acct_no);

        // dispatch(updateSuppliers(supplier._id, formData));
        dispatch(updateSuppliers(Ssupplier._id, formData));
    }

    return (
        <Fragment>
            <MetaData title={`Update Supplier`} />
            <div className="container_body">
            <Header/>
                <div className="left">
                    <div class="header">
                        <h2 className="animation a1">Update Supplier</h2>
                        <h4 className="animation a2">Update supplier's  personal details</h4>
                    </div>
                    
                    {/* Start of form */}
                    <form onSubmit={submitHandler}>
                    <div className="form">
                        <input type="text" className="form-field animation a3" placeholder="Supplier Name" value={name} />
                        <input type="text" className="form-field animation a3" placeholder="NIC Number" value={nic} />
                        <input type="text" className="form-field animation a3" placeholder="Account Number" value={account}  />
                        <input type="text" className="form-field animation a3" placeholder="Contact Number" value={contact}  />
                        <input type="email" className="form-field animation a3" placeholder="Email Address" value={email}  />
                        {/* <div className="registerSuppDiv1">
                            <label> Gender </label>
                            <div className="registerSuppDiv2">

                                <label> Male </label>
                                <input type="radio" style={{marginRight:"20px"}} className="form-field animation a3"  />
                                <label> Female </label>
                                <input type="radio" className="form-field animation a3" />
                                
                            </div>
                        </div> */}
                        <button> SUBMIT </button>
                    </div>
                    </form>
                    {/* End of form */}
                    </div>
                    <div className="right_suppReg"></div>
                </div>
        </Fragment>
    )
}