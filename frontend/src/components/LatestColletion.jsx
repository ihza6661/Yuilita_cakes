import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="my-10 py-10 rounded-lg">
            <div className="text-center py-6">
                <Title text1={'🍰 PRODUK'} text2={'TERBARU 🎂'} />
                <p className="w-3/4 mx-auto text-sm sm:text-base text-pink-700 font-medium">
                    Temukan koleksi terbaru dari kue lezat kami. Manjakan diri Anda dengan rasa yang istimewa! 💕
                </p>
            </div>

            {/* Rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
                {latestProducts.map((item, index) => (
                    <div
                        key={index}
                        className="transform hover:scale-105 transition-transform duration-300 ease-in-out bg-pink-100 rounded-xl p-4 shadow-md"
                    >
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
