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
        <div className="border-t bg-pink-50 min-h-screen">
            <div className="text-3xl font-bold text-pink-700 mb-6 pt-36 text-center">
                <Title text1={'Pesanan'} text2={'Anda'} />
            </div>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
                {
                    cartData.map((item) => {
                        const productData = products.find((product) => product._id === item._id);
                        if (!productData) {
                            return null;
                        }
                        return (
                            <div key={item._id} className="py-4 border-b border-pink-200 flex items-center gap-6">
                                <img
                                    className="w-20 h-20 rounded-lg shadow-md object-cover"
                                    src={productData?.image?.[0] || 'fallback-image-url'}
                                    alt={productData?.name || 'Product image'}
                                />
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-pink-800">{productData.name}</p>
                                    <div className="flex items-center gap-5 mt-2 text-pink-600">
                                        <p className="font-medium">{currency}{productData.price}.000</p>
                                        <p className='px-3 py-1 border bg-pink-100 text-pink-800 rounded-md'>{item.size}</p>
                                    </div>
                                </div>
                                <input
                                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                                    className='border rounded-md px-3 py-1 w-16 text-center text-pink-800'
                                    type="number"
                                    min={1}
                                    defaultValue={item.quantity}
                                />
                                <img
                                    onClick={() => updateQuantity(item._id, item.size, 0)}
                                    className='w-6 cursor-pointer hover:opacity-70 transition'
                                    src={assets.bin_icon}
                                    alt="Delete"
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className="flex justify-center my-12">
                <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
                    <CartTotal />
                    <div className="w-full text-center mt-6">
                        <button onClick={() => navigate('/place-order')} className='bg-pink-600 hover:bg-pink-500 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-md transition'>LANJUT KE PEMBAYARAN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
