import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = React.useState('M');

    const sizes = ['S', 'M', 'L', 'XL'];

    return (
        <div className="group relative">
            <div className="w-full h-96 bg-gray-100 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-500" />

                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm border-t border-black">
                    <div className="flex justify-center space-x-2 mb-3">
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedSize(size);
                                }}
                                className={`w-8 h-8 text-xs font-bold border ${selectedSize === size
                                        ? 'bg-black text-white border-black'
                                        : 'bg-transparent text-black border-gray-300 hover:border-black'
                                    } transition-colors`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => addToCart({ ...product, size: selectedSize })}
                        className="w-full bg-black text-white py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus className="w-4 h-4" /> Add to Cart
                    </button>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-sm text-black font-bold uppercase tracking-wider">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-black">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
