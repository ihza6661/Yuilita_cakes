import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let filteredProducts = products.filter(
                (item) => category === item.category && subCategory === item.subCategory
            );
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, category, subCategory]);

    return (
        <div className="my-24 px-4">
            {/* Title Section */}
            <div className="text-center text-3xl py-4">
                <Title text1="PRODUK" text2="TERKAIT" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {related.map((item, index) => (
                    <div
                        key={index}
                        className="bg-pink-100 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-pink-100"
                    >
                        <ProductItem
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
