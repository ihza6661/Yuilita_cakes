import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const notify = () => toast.success("Added to cart!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            backgroundColor: "#ffccd5", // Pink background
            color: "#00000", // White text
            fontWeight: "normal",
            fontSize: "16px",
            borderRadius: "8px",
            border: "2px solid white" // White border
        }
    });



    useEffect(() => {
        const product = products.find(item => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-36 transition-opacity ease-in duration-500 opacity-100 bg-pink-50'>
            <ToastContainer /> {/* Add ToastContainer here */}

            {/* Product Data */}
            <div className='flex flex-col sm:flex-row gap-12 sm:gap-16 max-w-6xl mx-auto px-4'>
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse sm:flex-row gap-4'>
                    <div className='flex flex-row sm:flex-col gap-3 sm:w-1/5'>
                        {productData.image.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                onClick={() => setImage(item)}
                                className='w-20 sm:w-full rounded-lg cursor-pointer border-2 border-transparent hover:border-pink-400 transition'
                                alt='Cake Thumbnail'
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-4/5'>
                        <img className='w-full h-auto rounded-lg shadow-md' src={image} alt='Cake' />
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-bold text-3xl text-pink-700'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src={assets.star_icon} alt='Star' className='w-4' />
                        ))}
                        <img src={assets.star_dull_icon} alt='Star' className='w-4' />
                        <p className='pl-2 text-gray-600'>(122 Reviews)</p>
                    </div>
                    <p className='mt-5 text-3xl font-semibold text-pink-600'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-700 leading-relaxed'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='font-semibold text-pink-700'>Select Size</p>
                        <div className='flex gap-3'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`py-2 px-4 rounded-full border border-pink-300 font-medium transition 
        ${item === size ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'}`}
                                >
                                    {item}
                                </button>

                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            addToCart(productData._id, size);
                            notify(); // Call notify function here
                        }}
                        className='bg-pink-500 text-white px-8 py-3 text-sm font-bold rounded-full shadow-lg hover:bg-pink-600 transition'>
                        Add to Cart
                    </button>
                    <hr className='mt-8' />
                    <div className='text-sm text-gray-600 mt-5 flex flex-col gap-1'>
                        <p>🎂 Freshly Baked with Love</p>
                        <p>🚚 Free Delivery for Orders Over $50</p>
                    </div>
                </div>
            </div>

            {/* Description & Reviews Section */}
            <div className='mt-20 max-w-6xl mx-auto px-4'>
                <div className='flex border-b'>
                    <b className='px-5 py-3 text-sm text-pink-700 border-b-2 border-pink-500'>Description</b>
                    <p className='px-5 py-3 text-sm text-gray-600 cursor-pointer hover:text-pink-700 transition'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border p-6 text-sm text-gray-600 bg-white rounded-lg shadow-md'>
                    <p>Our cakes are made with the finest ingredients and lots of love! 🎂</p>
                    <p>Perfect for birthdays, weddings, or any sweet celebration!</p>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <div className='opacity-0'></div>;
};

export default Product;
