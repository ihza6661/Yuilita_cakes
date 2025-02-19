import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const menuItems = ["Beranda", "Tentang Kami", "Syarat & Ketentuan", "Pengiriman", "Kebijakan Privasi", "FAQs"];

const socialLinks = [
    { icon: faSquareInstagram, color: "hover:text-red-300", link: "https://instagram.com", label: "Instagram" },
    { icon: faFacebook, color: "hover:text-blue-600", link: "https://facebook.com", label: "Facebook" },
    { icon: faYoutube, color: "hover:text-red-600", link: "https://youtube.com", label: "YouTube" },
    { icon: faSquareXTwitter, color: "hover:text-blue-500", link: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
    return (
        <div className="bg-pink-50 py-10 rounded-t-3xl">
            <div className="container mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-6 my-10 mt-0 sm:mt-40 text-sm">
                {/* Logo & About Section */}
                <div>
                    <img src="/white.png" className="mb-5 mt-10 sm:mt-0 w-40" alt="Yulita Cakes Logo" />
                    <p className="w-full md:w-2/3 text-pink-700 font-medium">
                        Yuk, tetap terhubung dengan kami! Follow sosial media kami untuk info terbaru, promo spesial, dan konten seru lainnya. Jangan sampai ketinggalan! 🍰✨
                    </p>
                </div>

                {/* Customer Service Menu */}
                <div>
                    <p className="text-xl font-semibold mb-5 text-pink-800">Layanan Pelanggan</p>
                    <ul className="flex flex-col gap-2 text-pink-600">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:text-pink-900 transition-all duration-300 hover:translate-x-1"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <p className="text-xl font-semibold mb-5 text-pink-800">Kontak</p>
                    <ul className="flex flex-col gap-2 text-pink-600">
                        <li className="cursor-pointer hover:text-pink-900 transition-all duration-300 hover:translate-x-1">
                            <a href="tel:+6289692070289" className="flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="mr-2 text-pink-500" />
                                +62 (8)9692 070289
                            </a>
                        </li>
                        <li className="cursor-pointer hover:text-pink-900 transition-all duration-300 hover:translate-x-1">
                            <a href="mailto:yulita_cakes@gmail.com" className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-pink-500" />
                                yulita_cakes@gmail.com
                            </a>
                        </li>
                    </ul>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4 pt-5">
                        {socialLinks.map(({ icon, color, link, label }, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`text-2xl text-pink-700 transition-colors ${color}`}
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center">
                <hr className="border-pink-300" />
                <p className="py-5 text-sm text-pink-600">
                    © 2024 - <span className="font-semibold">Yulita Cakes</span> - All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
