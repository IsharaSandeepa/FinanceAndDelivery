import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import Swal from 'sweetalert2'

import jsPdf from 'jspdf';
import 'jspdf-autotable';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminOffers, deleteOffer, clearErrors } from '../../actions/offerActions' 
import { DELETE_OFFER_RESET } from '../../constants/offerConstants'

/*
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
*/

const OffersList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, offers } = useSelector(state => state.offers);
    const { error: deleteError, isDeleted } = useSelector(state => state.offer)

    useEffect(() => {
        dispatch(getAdminOffers());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success('Offer deleted successfully');
            history.push('/admin/offers');
            dispatch({ type: DELETE_OFFER_RESET })
        }
    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setOffers = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Description',
                    field: 'description',
                    sort: 'asc'
                },
                {
                    label: 'End Date',
                    field: 'endDate',
                    sort: 'asc'
                },
                {
                    label: 'Price (Rs.)',
                    field: 'price',
                    sort: 'asc'
                },
                // {
                //     label: 'Actions',
                //     field: 'actions',
                //     sort: 'asc'
                // },
            ],
            rows: []

        }

        offers.forEach(offer => {
            data.rows.push({
                id: offer._id,
                description: offer.description,
                endDate: offer.endDate,
                price: `${offer.price}`,
                // actions:
                // <Fragment>
                //     <Link to={`/admin/offer/${offer._id}`} className="btn btn-primary py-1 px-2">
                //         <i className="fa fa-pencil"></i>
                //     </Link>
                //     <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteOfferHandler(offer._id)}>
                //         <i className="fa fa-trash"></i>
                //     </button>
                // </Fragment>
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
    
    
    
        doc.text(600, 20, 'Offer Details Report', { align: 'center' },);
    
        doc.autoTable({ html: '#Offer-table' })
    
    
    
        doc.autoTable({
    
          columnStyles: { europe: { halign: 'offerDetailsPdf' } },
    
          margin: { top: 10 },
    
        })
    
    
    
        //save the pdf
    
        doc.save("Offer Details.pdf");
    
      }


    //end report

    // const deleteOfferHandler = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             dispatch(deleteOffer(id))
    //           Swal.fire(
                  
    //             'Deleted!',
    //             'Offer has been deleted.',
    //             'success'
    //           )
    //         }
    //       })
    // }


    return (
        <div className="containerList" style={{margin:"100px"}}>
            <Fragment>
                <MetaData title={'All Offers'} />

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
                    <h1>All Offers</h1>

                    {loading ? <Loader /> :(
                        <MDBDataTable
                            data={setOffers()}
                            bordered
                            striped
                            hover
                            header = 'false'
                            id = 'Offer-table'
                            className = 'table'
                        />
                    )}

                    <button className="profileBtn" onClick ={jsPdfGenerator}> Generate Report PDF</button>
                </Fragment>
            </Fragment>
        </div>
    )
}

export default OffersList
