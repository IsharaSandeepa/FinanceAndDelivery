import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AdminFooter from '../layout/AdminFooter';
import Admin_nav from '../layout/AdminNav';

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newOffer, clearErrors } from '../../actions/offerActions' 
import { NEW_OFFER_RESET } from '../../constants/offerConstants'

import '../style/anuka.css'

const NewOffer = ({ history }) => {

    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState('');
    const [price, setPrice] = useState(0);

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newOffer);

    useEffect(() => {

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if(success) {
            history.push('/admin/offers');
            alert.success('Offer created successfully');
            dispatch({ type: NEW_OFFER_RESET})
        }
    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('description', description);
        formData.set('endDate', endDate);
        formData.set('price', price);

        images.forEach(image => {
            formData.append('images', image)
        })

        if (price < 100 || price > 40000){
            alert.error("Offer Price should be between Rs.100.00 and Rs. 40,000.00 ");
        }

        else {
            dispatch(newOffer(formData))
        }
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if(reader.readyState === 2){
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })

    }

    return (
        <Fragment>
            <MetaData title={'New Offer'} />

            <Fragment>
            <Header/>
            <section className="container_yo">
                    <Admin_nav/>
                </section>
                <section className="container55555">
                <div className="myForm">
                    <form onSubmit={submitHandler} encType='multipart/form-data'>

                        <center><h1 className="h1addad">Add New Offer</h1></center><br/>

                        <div className="labelInput" style={{height:"90px"}}>

                        <label for="description_field" className="formLabel">Description</label>
                            <textarea 
                                id="description_field" 
                                className="formInputTextArea" 
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <br/>


                        <div className="labelInput">
                            <label for="endDate_field" className="formLabel">End Date</label>
                            <input
                                type="date"
                                id="endDate_field"
                                className="formInputOffer"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <br/>

                        <div className="labelInput">

                            <label for="price_field" className="formLabel">Price (Rs.)</label>
                            <input
                                type="number"
                                id="price_field"
                                className="formInputOffer"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div className="imageUpload">
                            <label className="hghghhgf">Upload Images</label><br /><br />

                            <div>
                                <input
                                    type='file'
                                    name='offer_images'
                                    id='customFile'
                                    onChange={onChange}
                                    multiple
                                    accept="image/*"
                                />

                                <label for='customFile'></label>
                            </div>

                            {imagesPreview.map(img => (
                                <img src={img} key={img} alt="Images Preview" width="30%" height="200px"/>
                            ))}

                            <br />
                        

                            <button
                                id="login_button"
                                type="submit"
                                className="buttonSumbit"
                                disabled={loading ? true : false}
                            >
                                CREATE
                            </button>
                        </div>
                                
                    
                    </form>

                </div>

                </section>
                
            </Fragment>
        </Fragment>
    )
}

export default NewOffer
