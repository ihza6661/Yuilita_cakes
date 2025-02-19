import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, getCartAmount, delivery_fee, products, setCartItems } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        alamat: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            let orderItems = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
            };

            if (method === 'cod') {
                const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
                if (response.data.success) {
                    setCartItems({});
                    navigate('/orders');
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-6 pt-36 min-h-screen bg-[#FFF0F5] border-t p-6'>
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-6 rounded-lg shadow-lg border border-pink-200">
                <Title text1={'Informasi'} text2={'Pengiriman'} />
                <div className="flex gap-3">
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border rounded-md p-2 w-full focus:outline-pink-400' type="text" placeholder='Nama' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border rounded-md p-2 w-full focus:outline-pink-400' type="text" placeholder='Nama Akhir' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border rounded-md p-2 w-full focus:outline-pink-400' type="email" placeholder='Email' />
                <input required onChange={onChangeHandler} name='alamat' value={formData.alamat} className='border rounded-md p-2 w-full focus:outline-pink-400' type="text" placeholder='Alamat' />
                <div className="flex gap-3">
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border rounded-md p-2 w-full focus:outline-pink-400' type="text" placeholder='Kota' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='border rounded-md p-2 w-full focus:outline-pink-400' type="text" placeholder='Provinsi' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border rounded-md p-2 w-full focus:outline-pink-400' type="number" placeholder='Nomor HP' />
            </div>

            <div className="mt-8 w-full sm:max-w-[450px] bg-white p-6 rounded-lg shadow-lg border border-pink-200">
                <CartTotal />
                <Title text1={'METODE'} text2={'PEMBAYARAN'} />
                <div className="flex gap-3 flex-col mt-4">
                    <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-3 px-4 cursor-pointer rounded-lg bg-[#FFD1DC] hover:bg-[#FFB6C1] transition">
                        <p className={`w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                        <p className='text-gray-700 font-medium'>COD</p>
                    </div>
                </div>
                <div className="w-full text-center mt-6">
                    <button type='submit' className='bg-[#FF69B4] hover:bg-[#FF1493] text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-md transition'>BAYAR SEKARANG</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
