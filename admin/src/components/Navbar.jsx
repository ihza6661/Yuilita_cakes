import React from 'react'
import { assets } from '../assets/assets'


const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            <img className='w-[max(5%,80px)]' src={assets.as_denim_logo} alt="" />
            <img className='w-[max(10%,80px)]' src={assets.admin} alt="" />
            <button onClick={() => setToken('')} className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105'>Keluar</button>
        </div>
    )
}

export default Navbar
