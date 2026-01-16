import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    useEffect(() => {
        if (cart.length === 0 && !success) {
            navigate('/shop');
        }
    }, [cart, success, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            clearCart();
        }, 2000);
    };

    if (success) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
                <div className="text-center max-w-lg w-full">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-24 h-24 text-black" />
                    </div>
                    <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Payment Successful</h2>
                    <p className="text-gray-500 mb-8">Thank you for your order. A confirmation email has been sent to {formData.email}.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold uppercase tracking-tighter mb-12">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Contact & Shipping</h2>
                            <div className="space-y-4">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                />
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                />
                                <input
                                    required
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                    />
                                    <input
                                        required
                                        type="text"
                                        name="zip"
                                        placeholder="ZIP / Postal Code"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Payment Method</h2>
                            <div className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        type="text"
                                        name="expiry"
                                        placeholder="MM / YY"
                                        value={formData.expiry}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                    />
                                    <input
                                        required
                                        type="text"
                                        name="cvc"
                                        placeholder="CVC"
                                        value={formData.cvc}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                    Processing...
                                </>
                            ) : (
                                `Pay $${cartTotal.toFixed(2)}`
                            )}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-8 h-fit">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Order Summary</h2>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                <div className="w-16 h-20 bg-gray-200 flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-sm font-bold uppercase">{item.name}</h3>
                                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 uppercase mt-1">Size: {item.size}</p>
                                    <p className="text-xs text-gray-500 uppercase">Qty: {item.quantity}</p>
                                </div>
                            </div>
                        ))}

                        <div className="border-t border-gray-200 pt-6 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-base font-bold uppercase pt-4">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
