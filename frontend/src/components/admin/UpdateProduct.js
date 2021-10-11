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
import { updateProduct, getProductDetails, clearErrors } from '../../actions/productActions' 
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'

const UpdateProduct = ({ match, history }) => {

    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState(0);
    const [mediumPrice, setMediumPrice] = useState(0);
    const [largePrice, setLargePrice] = useState(0);
    const [freshFruitToppingPrice, setFreshFruitToppingPrice] = useState(0);
    const [chocolateCandiesAndCashewNutToppingPrice, setChocolateCandiesAndCashewNutToppingPrice] = useState(0);
    const [moldableFondanToppingPrice, setMoldableFondanToppingPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [menu, setMenu] = useState('');
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const menus = [
        'Chocolate',
        'Fruit',
        'Cupcakes',
        'Cheese',
        'Coffee'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, product } = useSelector(state => state.productDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);

    const productId = match.params.id;

    useEffect(() => {

        if(product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        }else {
            setName(product.name);
            setSmallPrice(product.smallPrice);
            setMediumPrice(product.mediumPrice);
            setLargePrice(product.largePrice);
            setFreshFruitToppingPrice(product.freshFruitToppingPrice);
            setChocolateCandiesAndCashewNutToppingPrice(product.chocolateCandiesAndCashewNutToppingPrice);
            setMoldableFondanToppingPrice(product.moldableFondanToppingPrice);
            setDescription(product.description);
            setMenu(product.menu);
            setOldImages(product.images)
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }

        if(isUpdated) {
            history.push('/admin/products');
            alert.success('Product updated successfully');
            dispatch({ type: UPDATE_PRODUCT_RESET})
        }
    }, [dispatch, alert, error, isUpdated, history, updateError, product, productId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('smallPrice', smallPrice);
        formData.set('mediumPrice', mediumPrice);
        formData.set('largePrice', largePrice);
        formData.set('freshFruitToppingPrice', freshFruitToppingPrice);
        formData.set('chocolateCandiesAndCashewNutToppingPrice', chocolateCandiesAndCashewNutToppingPrice);
        formData.set('moldableFondanToppingPrice', moldableFondanToppingPrice);
        formData.set('description', description);
        formData.set('menu', menu);

        images.forEach(image => {
            formData.append('images', image)
        })

        if (smallPrice < 100 || smallPrice > 20000){
            alert.error("Small Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }

        else if (mediumPrice < 100 || mediumPrice > 20000){
            alert.error("Medium Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }
        else if (largePrice < 100 || largePrice > 20000){
            alert.error("Large Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }
        else if (freshFruitToppingPrice < 100 || freshFruitToppingPrice > 20000){
            alert.error("Fresh Fruit Topping Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }
        else if (chocolateCandiesAndCashewNutToppingPrice < 100 || chocolateCandiesAndCashewNutToppingPrice > 20000){
            alert.error("Chocolate Candies And Cashew Nut Topping Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }
        else if (moldableFondanToppingPrice < 100 || moldableFondanToppingPrice > 20000){
            alert.error("Moldable Fondan Topping Price should be between Rs.100.00 and Rs. 20,000.00 ");
        }
        
        else {
            dispatch(updateProduct(product._id, formData))
        }
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

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
            <MetaData title={'Update Product'} />

            <Fragment>
            <Header/>
            <section className="container_yo">
                    <Admin_nav/>
                </section>
                <section className="container55555">
                <div className="myForm">
                    <form onSubmit={submitHandler} encType='multipart/form-data'>

                        <center><h1 className="h1addad">Update Product Details</h1></center><br/>

                        <div className="labelInput">
                            <label htmlFor="name_field" className="formLabel">Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="formInput"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        
                        <div className="labelInput">
                            <label htmlFor="smallPrice_field" className="formLabel">Small Price (Rs.)</label>
                            <input
                                type="number"
                                id="smallPrice_field"
                                className="formInput"
                                value={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="mediumPrice_field" className="formLabel">Medium Price (Rs.)</label>
                            <input
                                type="number"
                                id="mediumPrice_field"
                                className="formInput"
                                value={mediumPrice}
                                onChange={(e) => setMediumPrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="largePrice_field" className="formLabel">Large Price (Rs.)</label>
                            <input
                                type="number"
                                id="largePrice_field"
                                className="formInput"
                                value={largePrice}
                                onChange={(e) => setLargePrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="freshFruitToppingPrice_field" className="formLabel">Fresh Fruit Topping Price (Rs.)</label>
                            <input
                                type="number"
                                id="freshFruitToppingPrice_field"
                                className="formInput"
                                value={freshFruitToppingPrice}
                                onChange={(e) => setFreshFruitToppingPrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="chocolateCandiesAndCashewNutToppingPrice_field" className="formLabel">Chocolate Candies And Cashew Nut Topping Price (Rs.)</label>
                            <input
                                type="number"
                                id="chocolateCandiesAndCashewNutToppingPrice_field"
                                className="formInput"
                                value={chocolateCandiesAndCashewNutToppingPrice}
                                onChange={(e) => setChocolateCandiesAndCashewNutToppingPrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="moldableFondanToppingPrice_field" className="formLabel">Moldable Fondan Topping Price (Rs.)</label>
                            <input
                                type="number"
                                id="moldableFondanToppingPrice_field"
                                className="formInput"
                                value={moldableFondanToppingPrice}
                                onChange={(e) => setMoldableFondanToppingPrice(e.target.value)}
                            />
                        </div>

                        <div className="labelInput">
                            <label htmlFor="description_field" className="formLabel">Description</label>
                            <textarea 
                                id="description_field" 
                                className="formInputTextArea"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <br/><br/><br/><br/>

                        <div className="labelInput">
                            <label htmlFor="menu_field" className="formLabel">Menu</label>
                            <select id="menu_field" className="formInput" value={menu} onChange={(e) => setMenu(e.target.value)}>
                                {menus.map(menu => (
                                    <option key={menu} value={menu}>{menu}</option>
                                ))}
                                
                            </select>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div className="imageUpload">
                            <label>Upload Images</label><br /><br />

                            <div>
                                <input
                                    type='file'
                                    name='product_images'
                                    id='customFile'
                                    onChange={onChange}
                                    multiple
                                    accept="image/*"
                                />

                                <label htmlFor='customFile'></label>
                            </div>

                            <br/>
                            <br/>

                            {oldImages && oldImages.map(img => (
                                <img key={img} src={img.url} alt={img.url} width="30%" height="200px"/>
                            ))}

                            {imagesPreview.map(img => (
                                <img src={img} key={img} alt="Images Preview" width="30%" height="200px"/>
                            ))}
                        

                            <br />
                            <br />
                            <br />
                            
                            <button
                                id="login_button"
                                type="submit"
                                className="buttonSumbit"
                                disabled={loading ? true : false}
                            >
                                UPDATE
                            </button>
                        
                        </div>        
                    
                    </form>
                </div>

                </section>
                {/* <AdminFooter/> */}
            </Fragment>
        </Fragment>
    )
}

export default UpdateProduct
