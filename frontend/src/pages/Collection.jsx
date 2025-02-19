import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Collection = () => {
    const { products, search, showSearch, setShowSearch } = useContext(ShopContext);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevent');
    const [filterProducts, setFilterProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = (value, filterType) => {
        if (filterType === 'category') {
            setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
        } else if (filterType === 'subCategory') {
            setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
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
            filteredProducts = filteredProducts.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            filteredProducts = filteredProducts.filter(item => subCategory.includes(item.subCategory));
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
        <div className="my-10 bg-pink-50 py-10 rounded-lg">
            {/* Title Section */}
            <div className="text-center py-6">
                <Title text1={'🛍️ Yulita'} text2={'Cakes 🎀'} />
                <p className="w-3/4 mx-auto text-sm sm:text-base text-pink-700 font-medium">
                    Jelajahi koleksi terbaik kami dan temukan produk favorit Anda! ✨
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6">
                {/* Sidebar Filters */}
                <div className="min-w-60 px-4 bg-cream">

                    <p className='my-2 text-xl flex items-center gap-2 cursor-pointer'>
                        CARI
                        <FontAwesomeIcon onClick={() => setShowSearch(true)} icon={faSearch} className='cursor-pointer' />
                    </p>
                    <hr />
                    <p className='my-2 text-xl flex items-center gap-2 cursor-pointer' onClick={() => setShowFilter(prev => !prev)}>
                        FILTER
                        <FontAwesomeIcon icon={faArrowRight} className={`h-6 sm:hidden cursor-pointer transform transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} />
                    </p>

                    {/* Filter Options */}
                    <div className={`border border-gray-300 p-5 rounded-lg bg-cream shadow-md ${showFilter ? '' : 'hidden sm:block'}`}>
                        <p className='mb-3 text-sm font-medium'>KATEGORI</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {['Men', 'Women', 'Kids'].map(item => (
                                <p key={item} className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={item} onChange={() => toggleFilter(item, 'category')} />
                                    {item === 'Men' ? 'Pria' : item === 'Women' ? 'Wanita' : 'Anak-Anak'}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className={`border border-gray-300 p-5 mt-5 rounded-lg bg-cream shadow-md ${showFilter ? '' : 'hidden sm:block'}`}>
                        <p className='mb-3 text-sm font-medium'>TIPE</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {['Topwear', 'Bottomwear', 'Winterwear'].map(item => (
                                <p key={item} className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={item} onChange={() => toggleFilter(item, 'subCategory')} />
                                    {item === 'Topwear' ? 'Atasan' : item === 'Bottomwear' ? 'Bawahan' : 'Musim Dingin'}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-2xl mb-4 px-4 ">
                        <Title text1={'SEMUA'} text2={'PRODUK ✨'} />
                        <select
                            onChange={(e) => setSortType(e.target.value)}
                            className="border-2 border-gray-300 text-sm px-2 w-48 rounded-md "
                        >
                            <option value="relevent">Urutkan: Paling Sesuai</option>
                            <option value="low-high">Urutkan: Harga Terendah</option>
                            <option value="high-low">Urutkan: Harga Tertinggi</option>
                        </select>
                    </div>

                    {/* Product Listing */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
                        {filterProducts.length > 0 ? (
                            filterProducts.map((item) => (
                                <div key={item._id} className="transform hover:scale-105 transition-transform duration-300 ease-in-out bg-pink-100 rounded-xl p-4 shadow-md">
                                    <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">Tidak ada produk yang cocok dengan filter.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
