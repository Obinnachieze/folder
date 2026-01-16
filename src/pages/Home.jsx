import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 drop-shadow-xl">
                        Defy Limits. <br /> Define Yourself.
                    </h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Precision-engineered gym wear for the modern athlete. minimalist design, maximum performance.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
                    >
                        Shop Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Featured Collection */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-bold uppercase tracking-tight">Featured Drops</h2>
                    <Link to="/shop" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Banner Section */}
            <div className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Monarch Elite</h2>
                        <p className="text-gray-400 text-lg mb-6">Join the movement. Exclusive drops, early access, and member-only pricing.</p>
                        <button className="border border-white text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Join Now
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="text-[10rem] font-bold leading-none tracking-tighter opacity-10 select-none">
                            M
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
