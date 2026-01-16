import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <div
            className={clsx(
                "fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ease-in-out",
                isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
        >
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setIsCartOpen(false)}
            />

            <div
                className={clsx(
                    "absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col",
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold uppercase tracking-widest">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2 text-black hover:text-gray-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <p className="text-gray-500 font-medium">Your cart is empty.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-black underline uppercase tracking-widest text-sm font-bold hover:text-gray-600"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex space-x-4">
                                    <div className="w-24 h-32 flex-shrink-0 bg-gray-100 overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-black font-bold uppercase tracking-wider">{item.name}</h3>
                                                <p className="font-medium">${item.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 uppercase">Size: {item.size}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-black">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                    className="p-1 hover:bg-black hover:text-white transition-colors"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="px-3 font-medium text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                    className="p-1 hover:bg-black hover:text-white transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="text-gray-400 hover:text-red-600 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-white">
                        <div className="flex justify-between text-base font-bold uppercase tracking-widest mb-6">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                        <Link
                            to="/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full bg-black text-white text-center py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors"
                        >
                            Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
