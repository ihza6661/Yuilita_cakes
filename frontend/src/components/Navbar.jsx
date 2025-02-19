import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faYoutube, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { getCartCount } = useContext(ShopContext);

    const navigate = useNavigate();

    return (
        <div className="navbar flex items-center justify-between px-8 py-5 font-medium h-20 fixed top-0 left-0 w-full z-50 border-b border-gray-200 shadow-md bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-300 md:px-32">
            {/* Logo */}
            <div className="flex flex-col">
                <Link to="/" className="logo flex-col">
                    <img src="/yulita_cake.png" className="w-20 transition-transform transform hover:scale-110" alt="Logo" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-8 text-lg text-gray-800">
                {['/', '/collection', '/about', '/contact'].map((path, index) => (
                    <NavLink
                        to={path}
                        key={index}
                        className="flex flex-col items-center gap-2 group"
                        activeclassname="text-gray-900"
                        end
                    >
                        {({ isActive }) => (
                            <>
                                <p className={`text-gray-600 hover:text-gray-900 transition-colors duration-300 ease-in-out font-semibold ${isActive ? 'text-pink-700' : ''}`}>
                                    {['BERANDA', 'PRODUK', 'LOKASI TOKO', 'KONTAK'][index]}
                                </p>
                                <div
                                    className={`w-1/2 h-[2px] bg-pink-700 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left ${isActive ? 'scale-x-100 bg-pink-700' : ''
                                        }`}
                                />
                            </>
                        )}
                    </NavLink>
                ))}
            </ul>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center gap-3 p-2 rounded-md ml-20">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                    <FontAwesomeIcon icon={faSquareInstagram} className="text-pink-500 hover:text-pink-600" />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-700" />
                </a>

                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                    <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-700" />
                </a>




            </div>


            {/* Icons Section */}
            <div className="flex items-center gap-6">

                {/* User Icon with Dropdown */}
                <div className="group relative">
                    <Link to={'/login'}>
                        <FontAwesomeIcon icon={faUser} className="cursor-pointer text-xl text-gray-800 hover:text-pink-500 transition-colors" />
                    </Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded shadow-md">
                            {['Profil Saya', 'Orderan Saya', 'Keluar'].map((item, index) => (
                                <p key={index} className="cursor-pointer hover:text-pink-600">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 cursor-pointer text-xl text-gray-800 hover:text-pink-500 transition-colors" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-pink-600 text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>

                {/* Hamburger Menu Icon */}
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt="menu icon"
                />
            </div>

            {/* Sidebar Menu for Small Screens */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-full bg-gradient-to-tl from-pink-300 via-pink-200 to-pink-100 shadow-xl transition-all duration-300 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ zIndex: 999 }}
            >
                <div className="flex flex-col text-gray-600 p-6">
                    {/* Back Button */}
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer hover:bg-pink-200 rounded-lg transition-all duration-200 ease-in-out">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
                        <p className="text-gray-800 font-semibold">Kembali</p>
                    </div>

                    {/* Sidebar Links */}
                    {['/', '/collection', '/about', '/contact'].map((path, index) => (
                        <NavLink
                            key={index}
                            onClick={() => setVisible(false)}
                            className="py-3 pl-6 border-b border-gray-300 hover:bg-pink-200 rounded-lg text-gray-800 font-medium transition-all duration-200 ease-in-out"
                            to={path}
                        >
                            {['BERANDA', 'PRODUK', 'LOKASI TOKO', 'KONTAK'][index]}
                        </NavLink>
                    ))}
                </div>



                {/* social media icons */}
                <div className="flex items-center gap-3 p-2 rounded-md ml-8 border-b border-gray-300 ">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                        <FontAwesomeIcon icon={faSquareInstagram} className="text-pink-500 hover:text-pink-600" />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-700" />
                    </a>

                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors">
                        <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-700" />
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
