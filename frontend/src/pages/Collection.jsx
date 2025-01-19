import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevent');
    const [filterProducts, setFilterProducts] = useState(products);
    const [showFilter, setShowFilter] = useState(false); // Toggle filter visibility for small screens

    const { setShowSearch } = useContext(ShopContext);

    const toggleFilter = (value, filterType) => {
        if (filterType === 'category') {
            setCategory(prev =>
                prev.includes(value)
                    ? prev.filter(item => item !== value)
                    : [...prev, value]
            );
        } else if (filterType === 'subCategory') {
            setSubCategory(prev =>
                prev.includes(value)
                    ? prev.filter(item => item !== value)
                    : [...prev, value]
            );
        }
    };

    const applyFiltersAndSort = () => {
        let filteredProducts = [...products];

        if (showSearch && search) {
            filteredProducts = filteredProducts.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            filteredProducts = filteredProducts.filter(item =>
                category.includes(item.category)
            );
        }

        if (subCategory.length > 0) {
            filteredProducts = filteredProducts.filter(item =>
                subCategory.includes(item.subCategory)
            );
        }

        switch (sortType) {
            case 'low-high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilterProducts(filteredProducts);
    };

    useEffect(() => {
        applyFiltersAndSort();
    }, [category, subCategory, search, showSearch, sortType, products]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-16 border-t'>
            <div className="min-w-60">
                <div>
                    <p className='my-2 text-xl flex items-center gap-2 cursor-pointer'>
                        CARI
                        <FontAwesomeIcon onClick={() => setShowSearch(true)} icon={faSearch} className='cursor-pointer' />
                    </p>
                </div>
                <hr />
                <p
                    className='my-2 text-xl flex items-center gap-2 cursor-pointer'
                    onClick={() => setShowFilter(prev => !prev)} // Add the onClick here
                >
                    FILTER
                    {/* This icon will show only on small screens and toggle the filter visibility */}
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`h-6 sm:hidden cursor-pointer ${showFilter ? 'rotate-90' : ''} transform transition-transform duration-300`}
                    />
                </p>


                {/* Filter options (always visible on larger screens) */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${showFilter ? '' : 'hidden sm:block'}`}>
                    <p className='mb-3 text-sm font-medium'>KATEGORI</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Men', 'Women', 'Kids'].map(item => (
                            <p key={item} className='flex gap-2'>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={item}
                                    onChange={() => toggleFilter(item, 'category')}
                                />
                                {item === 'Men' ? 'Pria' : item === 'Women' ? 'Wanita' : 'Anak-Anak'}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 my-5 sm:block ${showFilter ? '' : 'hidden sm:block'}`}>
                    <p className='mb-3 text-sm font-medium'>TIPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Topwear', 'Bottomwear', 'Winterwear'].map(item => (
                            <p key={item} className='flex gap-2'>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={item}
                                    onChange={() => toggleFilter(item, 'subCategory')}
                                />
                                {item === 'Topwear' ? 'Atasan' : item === 'Bottomwear' ? 'Bawahan' : 'Musim Dingin'}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Products */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'SEMUA'} text2={'KOLEKSI'} />

                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-1 w-48 rounded-md sm:ml-0"
                    >
                        <option value="relevent">Urutkan: Paling Sesuai</option>
                        <option value="low-high">Urutkan: Harga Terendah</option>
                        <option value="high-low">Urutkan: Harga Tertinggi</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item) => (
                        <ProductItem key={item._id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
