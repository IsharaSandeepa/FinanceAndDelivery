import React, { Fragment, useEffect } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'
import { Link } from 'react-router-dom';

import Header from '../layout/Header';
import MetaData from '../inventory_manager/MetaData';
import Loader from '../layout/Loader';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getSuppliers } from '../../actions/supplierActions'

import { Router, Route } from 'react-router-dom' //search


//For Report Generation
import jsPdf from 'jspdf';
import 'jspdf-autotable';


export const SupplierReport = ({match, history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, suppliers, error, totSuppliers } = useSelector(state => state.suppliers )

    const keyword2 = match.params.keyword2 //search

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }

        dispatch(getSuppliers(keyword2)); //from supplierActions //search
            
    }, [dispatch, alert, error, keyword2, history])

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    //import report 
    function jsPdfGenerator  ()  {
    
        const doc = new jsPdf('l', 'pt', 'a3');
    
        doc.text(600, 20, 'Supplier Details Report', { align: 'center' },);
    
        doc.autoTable({ html: '#Supplier-table' })
    
        doc.autoTable({
    
          columnStyles: { europe: { halign: 'SupplierDetailsPdf' } },
    
          margin: { top: 10 },
    
        })
    
        //save the pdf
        doc.save("Supplier Details.pdf");
    
      }

    //end report


    return(
        <Fragment className="container-fluid">
            {loading? <Loader /> : (
                
                <Fragment>
                    <Header/>
                    <MetaData title={'Supplier Report'} />
                    
                    <table id = 'Supplier-table' className="tableContainerThiran">
                        <tr className="responsive-table ulThiran" >
                            <td className="col col-1">Supplier ID</td>
                            <td className="col col-2">Supplier Name</td>
                            <td className="col col-3">Supplier NIC</td>
                            <td className="col col-4">Supplier Account No</td>
                            <td className="col col-5">Supplier Gender</td>
                            <td className="col col-6">Supplier Contact No:</td>
                            <td className="col col-7">Supplier Email Address:</td>
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
                        </tr>
                        ))}

                    </table>
                    
                    <button className="profileBtn" onClick ={jsPdfGenerator}> Generate Report PDF</button>
                    <button onClick={ ()=> topFunction() } className="toTheTop" style={{marginLeft:"92%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                        <br/>
                        
                        </button>

                </Fragment>
            )}
        </Fragment>
    )

}
