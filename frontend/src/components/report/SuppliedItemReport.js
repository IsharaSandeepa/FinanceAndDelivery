import React, { Fragment, useEffect, useState } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'

import MetaData from '../inventory_manager/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from '../layout/Header';
import Loader from '../layout/Loader';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getSuppliedItems } from '../../actions/suppliedItemActions'

import { Route } from 'react-router-dom'
import Search1 from '../inventory_manager/Search1';

//For Report Generation
import jsPdf from 'jspdf';
import 'jspdf-autotable';


export const SuppliedItemReport = ({match}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, supplied_items, error, totItemCount } = useSelector(state => state.supplied_items )

    const keyword = match.params.keyword //search

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }

        dispatch(getSuppliedItems(keyword, currentPage)); //from suppliedItemActions

    }, [dispatch, alert, error, keyword, currentPage])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    
    //import report 
    function jsPdfGenerator  ()  {
    
        const doc = new jsPdf('l', 'pt', 'a3');
    
        doc.text(600, 20, 'Supplied Item Details Report', { align: 'center' },);
    
        doc.autoTable({ html: '#SuppliedItem-table' })
    
        doc.autoTable({
    
          columnStyles: { europe: { halign: 'SuppliedItemDetailsPdf' } },
    
          margin: { top: 10 },
    
        })
    
        //save the pdf
        doc.save("Supplied Item Details.pdf");
    
      }

    //end report

    return(
        <Fragment className="container-fluid">
            {loading? <Loader /> : (
                
                <Fragment>
                    <Header/>
                    
                    <MetaData title={'All Supplied Items'} />
                    
                    <table id = 'SuppliedItem-table' className="tableContainerThiran">
                        
                        <tr className="responsive-table ulThiran">
                            {/* <li className="table-header liThiran" > */}
                                <td className="col col-1">Item ID</td>
                                <td className="col col-2">Item Name</td>
                                <td className="col col-3">Item Price</td>
                                <td className="col col-4">Item Description</td>
                                <td className="col col-5">Supplier ID</td>
                                <td className="col col-6">Supply Items ID</td>
                                <td className="col col-7">Quantity</td>
                                <td className="col col-8">Date of Supply</td>
                            {/* </li> */}
                        </tr>

                        {supplied_items && supplied_items.map(supplied_items => (                  
                        <tr key={supplied_items._id} className="table-row liThiran">
                            <td className="col col-1" data-label="Item ID">{supplied_items._id}</td>
                            <td className="col col-2" data-label="Item Name">{supplied_items.s_item_name}</td>
                            <td className="col col-2" data-label="Item Price">{supplied_items.s_item_price}</td>
                            <td className="col col-3" data-label="Item Description">{supplied_items.s_item_description}</td>
                            <td className="col col-4" data-label="Supplier ID">{supplied_items.supplier_id}</td>
                            <td className="col col-6" data-label="Supply Items ID">{supplied_items.supply_items_id}</td>
                            <td className="col col-7" data-label="Quantity">{supplied_items.s_qty}</td>
                            <td className="col col-8" data-label="Date of Supply">{String(supplied_items.sup_date).substring(0, 10)}</td>
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