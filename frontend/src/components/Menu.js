import React, { Fragment, useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import './style/anuka.css'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'
import Search from './layout/Search'
import Header from './layout/Header';
import Footer from './layout/Footer';
import AdminFooter from './layout/AdminFooter';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'


const { createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)




const Menu = ({ match }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [smallPrice, setSmallPrice] = useState([1,10000])
    const [menu, setMenu]= useState('')

    const menus = [
        'Chocolate',
        'Fruit',
        'Cupcakes',
        'Cheese',
        'Coffee'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)

    const keyword = match.params.keyword

    useEffect(() => {
        if(error){
            return alert.error(error)

        }

        dispatch(getProducts(keyword, currentPage, smallPrice, menu));

        
    }, [dispatch, alert, error, ,keyword, currentPage, smallPrice, menu])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            
            {loading ? <Loader /> : (
                <Fragment>
                    
                    <MetaData title={'Our Menu'} />
                    <Header/>
                    <div className="containerMenu" style={{margin:"100px"}}>

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
                    <h1 id="products_heading">Our Products</h1>

                    <Route render={({ history }) => <Search history={history} /> } />

                    <section id="products">
                        <div >

                        
                                <Fragment>
                               
                                    <div >
                                        <div >
                                            {/* <Range
                                                marks={{
                                                    1: `Rs.1`,
                                                    10000: `Rs.10000`
                                                }}
                                                min={1}
                                                max={10000}
                                                defaultValue={[1, 10000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={smallPrice}
                                                onChange={smallPrice => setSmallPrice(smallPrice)}
                                            /> */}

                                            <hr />

                                            <div>
                                                <h4>
                                                    Menus
                                                </h4>

                                                <ul >
                                                    {menus.map(menu => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={menu}
                                                            onClick={() => setMenu(menu)}
                                                        >
                                                            {menu}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div >
                                        <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}>
                                            { products.map(product => (
                                        <Product key={product._id} product={product} />
                                    ))}
                                        </div>
                                    </div>
                                </Fragment>

                        </div>
                    </section>

                    {resPerPage <= productsCount && (

                        <div className="d-flex justify-content-center mt-5">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Next'}
                            prevPageText={'Prev'}
                            firstPageText={'First'}
                            lastPageText={'Last'}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                        </div>

                    )}
                    </div>
                    <Footer/>
                </Fragment>
            )}

        </Fragment>
    )
}

export default Menu
 