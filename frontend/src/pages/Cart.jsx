import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];

            Object.keys(cartItems).forEach(items => {
                const itemData = cartItems[items];

                if (typeof itemData === 'object' && itemData !== null) {
                    Object.keys(itemData).forEach(item => {
                        if (itemData[item] > 0) {
                            tempData.push({
                                _id: items,
                                size: item,
                                quantity: itemData[item]
                            });
                        }
                    });
                }
            });

            setCartData(tempData);
        }
    }, [cartItems, products]);


    return (
        <div className="border-t">
            <div className="text-2xl mb-3 pt-36">
                <Title text1={'Pesanan'} text2={'Anda'} />
            </div>
            <div>
                {
                    cartData.map((item) => {
                        const productData = products.find((product) => product._id === item._id);
                        if (!productData) {
                            return null; // Handle missing product data
                        }

                        return (
                            <div key={item._id} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                                <div className="flex items-start gap-6">
                                    <img
                                        className="w-16 sm:w-20"
                                        src={productData?.image?.[0] || 'fallback-image-url'}
                                        alt={productData?.name || 'Product image'}
                                    />
                                    <div>
                                        <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                                        <div className="flex items-center gap-5 mt-2">
                                            <p>{currency}{productData.price}. 000</p>
                                            <p className='px-2 sm:px-3 md:py-1 border bg-slate-50'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                            </div>
                        );
                    })
                }
            </div>
            <div className="flex justify-end my-20">
                <div className="w-full sm:w-[450px]">
                    <CartTotal />

                    <div className="w-full text-end">
                        <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>LANJUT KE PEMBAYARAN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
