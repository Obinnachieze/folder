import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Men', 'Women'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
                <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8">All Products</h1>

                <div className="flex space-x-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 text-sm font-bold uppercase tracking-widest border ${filter === cat
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-black border-gray-200 hover:border-black'
                                } transition-colors`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
