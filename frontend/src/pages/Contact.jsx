import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl border-t pt-36">
                <Title text1={'HUBUNGI'} text2={'KAMI'} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className='w-full md:max-w-[480px] rounded-lg shadow-lg' src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cake Shop" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className='font-semibold text-xl text-gray-600'>Toko Kami</p>
                    <p className='text-gray-500'>Jl. Manis No. 21, <br /> Komp. Sweet Delights, Jakarta</p>
                    <p className='text-gray-500'>+62 (8)1234 567890 <br />yulita_cake@sweetcakes.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Pesanan & Custom Cake</p>
                    <p className='text-gray-500'>Dapatkan kue spesial untuk acara Anda</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Pesan Sekarang</button>
                </div>
            </div>
            <NewsletterBox />
        </div>
    );
}

export default Contact;
