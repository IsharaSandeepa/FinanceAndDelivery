import React, { Fragment, useEffect, useState } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'

import MetaData from './MetaData';
import Loader from '../layout/Loader';
// import Admin_nav from './AdminNav';
import Admin_nav from '../layout/AdminNav';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getSuppliedItems, deleteProduct, updateSuppliedItems } from '../../actions/suppliedItemActions'

import { Route } from 'react-router-dom'
import Search1 from './Search1'; //search function for supplied items

// const deleteSuppliedItemHandler = (id) => {
//     dispatch(deleteProduct(id))
// }

export const AllSuppliedItems = ({match}) => {

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

    const deleteSuppliedItemHandler = (id) => {
        dispatch(deleteProduct(id))
    }

    const updateSuppliedItemHandler = (e) => {
        const sItemUpdate = {
            
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    
    return(
        <Fragment >
            <MetaData title={'All Supplied Items'} />
            {loading? <Loader /> : (
                
                <Fragment>
                    <Header/>
                <section className="container_yo">
                    <Admin_nav/>
                </section>
                <section className="container555424452345255">
                    
                    <Route render={({history}) => <Search1 history={history} /> } />
                    <div className="container-fluid">
                    <table className="tableContainerThiran">
                        <tr className="responsive-table ulThiran">
                            
                                <td className="col col-1">Item ID</td>
                                <td className="col col-2">Item Name</td>
                                <td className="col col-3">Item Price</td>
                                <td className="col col-4">Item Description</td>
                                <td className="col col-5">Supplier ID</td>
                                <td className="col col-6">Supply Items ID</td>
                                <td className="col col-7">Quantity</td>
                                <td className="col col-8">Date of Supply</td>
                                <td className="col col-9">Action</td>
                            
                        </tr>

                        {supplied_items && supplied_items.map(supplied_items => (                  
                        <tr key={supplied_items._id}>
                            <td className="col col-1" data-label="Item ID">{supplied_items._id}</td>
                            <td className="col col-2" data-label="Item Name">{supplied_items.s_item_name}</td>
                            <td className="col col-2" data-label="Item Price">{supplied_items.s_item_price}</td>
                            <td className="col col-3" data-label="Item Description">{supplied_items.s_item_description}</td>
                            <td className="col col-4" data-label="Supplier ID">{supplied_items.supplier_id}</td>
                            <td className="col col-6" data-label="Supply Items ID">{supplied_items.supply_items_id}</td>
                            <td className="col col-7" data-label="Quantity">{supplied_items.s_qty}</td>
                            <td className="col col-8" data-label="Date of Supply">{String(supplied_items.sup_date).substring(0, 10)}</td>
                            <td className="col col-9">
                                <button className="deleteButtonThiran" onClick={() => deleteSuppliedItemHandler(supplied_items._id)}> DELETE </button>
                                <button className="updateButtonThiran"> UPDATE </button>
                            </td>
                        </tr>
                        ))}
                        {/* </ul> */}
                        
                        
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

