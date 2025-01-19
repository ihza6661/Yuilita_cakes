import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

    const navigate = useNavigate();

    // const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="flex items-center justify-between px-8 py-5 font-medium h-20 bg-white fixed top-0 left-0 w-full z-50 border border-gray-300 shadow-sm md:px-32">
            {/* Logo */}
            <div className="flex flex-col">
                <Link to="/" className="logo flex-col">
                    <img src={assets.as_logo} className="w-36" alt="Logo" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                {['/', '/collection', '/about', '/contact'].map((path, index) => (
                    <NavLink to={path} key={index} className="flex flex-col items-center gap-1">
                        <p className="hover:text-black transition-all duration-300">
                            {['BERANDA', 'KOLEKSI', 'TENTANG KAMI', 'KONTAK'][index]}
                        </p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                ))}
            </ul>

            {/* Icons Section */}
            <div className="flex items-center gap-6">
                {/* Search Icon */}
                {/* <FontAwesomeIcon
                    icon={faSearch}
                    className="cursor-pointer"
                    onClick={() => setShowSearch(true)}
                /> */}


                {/* User Icon with Dropdown */}
                <div className="group relative">
                    <Link to={'/login'}>
                        <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
                    </Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            {['Profil Saya', 'Orderan Saya', 'Keluar'].map((item, index) => (
                                <p key={index} className="cursor-pointer hover:text-black">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 cursor-pointer" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center loading-4 bg-black text-white aspect-square rounded-full text-[8px]">
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
                className={`fixed top-0 right-0 bottom-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ zIndex: 999 }}
            >
                <div className="flex flex-col text-gray-600">
                    {/* Back Button */}
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
                        <p>Kembali</p>
                    </div>

                    {/* Sidebar Links */}
                    {['/', '/collection', '/about', '/contact'].map((path, index) => (
                        <NavLink
                            key={index}
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to={path}
                        >
                            {['BERANDA', 'KOLEKSI', 'TENTANG KAMI', 'KONTAK'][index]}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
