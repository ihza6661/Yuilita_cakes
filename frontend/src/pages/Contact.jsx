import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl border-t pt-36">
                <Title text1={'KONTAK'} text2={'KAMI'} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className='font-semibold text-xl text-gray-600'>Toko Kami</p>
                    <p className='text-gray-500'>Jl.Casablancas <br /> Komp.Hukama F.19, Pontianak Barat</p>
                    <p className='text-gray-500'>+62 (8)9692 070270 <br />az.denim@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Karir</p>
                    <p className='text-gray-500'>Info Seputar Pekerjaan</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Kunjungi</button>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default Contact
