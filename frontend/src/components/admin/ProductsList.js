import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'





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

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct, clearErrors } from '../../actions/productActions' 
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'

/*
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
*/

const ProductsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products);
    const { error: deleteError, isDeleted } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getAdminProducts());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success('Product deleted successfully');
            history.push('/admin/products');
            dispatch({ type: DELETE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Small Price (Rs.)',
                    field: 'smallPrice',
                    sort: 'asc'
                },
                {
                    label: 'Medium Price (Rs.)',
                    field: 'mediumPrice',
                    sort: 'asc'
                },
                {
                    label: 'Large Price (Rs.)',
                    field: 'largePrice',
                    sort: 'asc'
                },
                {
                    label: 'Fresh Fruit Topping Price (Rs.)',
                    field: 'freshFruitToppingPrice',
                    sort: 'asc'
                },
                {
                    label: 'Chocolate Candies And Cashew Nut Topping Price (Rs.)',
                    field: 'chocolateCandiesAndCashewNutToppingPrice',
                    sort: 'asc'
                },
                {
                    label: 'Moldable Fondan Topping Price (Rs.)',
                    field: 'moldableFondanToppingPrice',
                    sort: 'asc'
                },
                {
                    label: 'Menu',
                    field: 'menu',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                },
            ],
            rows: []

        }

        products.forEach(product => {
            data.rows.push({
                id: product._id,
                name: product.name,
                smallPrice: `${product.smallPrice}`,
                mediumPrice: `${product.mediumPrice}`,
                largePrice: `${product.largePrice}`,
                freshFruitToppingPrice: `${product.freshFruitToppingPrice}`,
                chocolateCandiesAndCashewNutToppingPrice: `${product.chocolateCandiesAndCashewNutToppingPrice}`,
                moldableFondanToppingPrice: `${product.moldableFondanToppingPrice}`,
                menu: `${product.menu}`,
                actions:
                <Fragment>
                    <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                    <i className="fas fa-trash-alt"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deleteProductHandler = (id) => {
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
                dispatch(deleteProduct(id))
              Swal.fire(
                  
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

    }

    return (
        
            <Fragment>
                <MetaData title={'All Products'} />
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
                <section className="container55555">
                    

                <h1 className="h12">Products</h1><br/><br/>
                    <Link to="/admin/product">
                        <button className="button565465847655654">
                            <div className ="learn-more">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Add Product</span>
                            </div>

                        </button>
                    </Link>
                    <br/><br/>

                    {loading ? <Loader /> :(
                        <MDBDataTable
                            data={setProducts()}
                            bordered
                            striped
                            hover
                        />
                    )}
                    </section>
                    
                </Fragment>
            </Fragment>
        
    )
}

export default ProductsList
