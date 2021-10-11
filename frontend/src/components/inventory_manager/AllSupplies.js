import React, { Fragment, useEffect } from 'react'
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
import { getSupplies, deleteSupply } from '../../actions/supplyActions'

import { Route } from 'react-router-dom' //search
import Search3 from './Search3';          //search


export const AllSupplies = ({match, history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, supplies, error, totSupplies } = useSelector(state => state.supplies )

    const keyword3 = match.params.keyword3 //search

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }

        dispatch(getSupplies(keyword3)); //from supplierActions //search
        // dispatch(getSuppliedItems(keyword)); //search

    }, [dispatch, alert, error, keyword3]) //'keyword' should be included for search function


    const deleteSupplyHandler = (id) => {
        dispatch(deleteSupply(id))
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <Fragment >
            <MetaData title={'All Supplies'} />
            {loading? <Loader /> : (
                //below code goes up when needed
                // <h1 style={{margin:"100px"}}> Loading Supplied Items </h1>
                <Fragment>
                <Header/>
            <section className="container_yo">
                <Admin_nav/>
            </section>
            <section className="container55555">

                    <Route render={({history}) => <Search3 history={history} /> } />
                    <div className="container-fluid">
                    <table className="tableContainerThiran">
                        <tr className="responsive-table ulThiran">
                            <td className="col col-1">Supply ID</td>
                            <td className="col col-2">Supplier ID</td>
                            <td className="col col-3">Supplied Item ID</td>
                            <td className="col col-4">Action</td>
                        </tr>

                        {supplies && supplies.map(supplies => (
                        <tr key={supplies._id} className="table-row liThiran">
                            <td className="col col-1" data-label="Supply ID">{supplies._id}</td>
                            <td className="col col-2" data-label="Supplier ID">{supplies.supplier_id}</td>
                            <td className="col col-2" data-label="Supplied Item ID">{supplies.supply_item_id}</td>
                            <td className="col col-3" data-label="Supplier Account No:">{supplies.acct_no}
                                <button className="deleteButtonThiran" onClick={() => deleteSupplyHandler(supplies._id)}>DELETE</button>
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