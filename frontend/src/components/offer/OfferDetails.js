// import React, { Fragment, useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import '../style/anuka.css'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getOfferDetails, clearErrors } from '../../actions/offerActions' 

//Addede By Ishara----------------------------------------------------
import React, { Fragment, useEffect, useState } from 'react'
import offer from './Offer';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { addOfferItemToCart } from '../../actions/cartActions';
//--------------------------------------------------------------------


const OfferDetails = ({ match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, offer } = useSelector(state => state.offerDetails)

    //Addede By Ishara----------------------------------------------------
    const [quantity, setQuentity] = useState(1)
    const [size, setSize] = useState('offer')
    const [sizePrice, setSizePrice] = useState(offer.price)
    const [topping, setTopping] = useState('None')
    const [toppingPrice, setToppingPrice] = useState(0)
    const [name, setNAme] = useState("Limited Offer")

    useEffect(() => {
        dispatch(getOfferDetails(match.params.id))

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }


    }, [dispatch, alert, error, match.params.id])

    const price = offer.price

    const addToCart = () => {
        dispatch(addOfferItemToCart(match.params.id, quantity,size,topping,price))
        alert.success("Item Addded to your CakeBox");
        }

    

    return (
        <Fragment>

        {loading ? <Loader /> : (
            <Fragment>

        {loading ? <Loader /> : (
            <Fragment>
                <MetaData title={offer.description}/>
                <Header/>
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="offer_image">
                        <Carousel pause='hover'>
                            {offer.images && offer.images.map(image =>(
                                <Carousel.Item key={image.public_id}>
                                    
                                    <img src={image.url} alt={offer.title} width="400px" height="auto"/>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </div>

                    <div className="allDetails">
                        <h3>{offer.description}</h3>
                        <h3>End Date: {offer.endDate}</h3>
                        <h3>Price : Rs.{offer.price}</h3>
                        {/* <h3>Created At : {offer.createdAt}</h3> */}

                        <br/><br/>
                        <button className="buttonAddToCart" onClick={addToCart} >Add To Cart</button>
                    </div>

                
                </div>
                <Footer/>
            </Fragment>
        )}

        </Fragment>

        )}
        </Fragment>
        
    )
}

export default OfferDetails
