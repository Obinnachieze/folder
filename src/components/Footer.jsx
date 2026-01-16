import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold tracking-tighter uppercase text-white block mb-6">
                            Monarch
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium gym wear for the dedicated. Define yourself with our monochromatic collection.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Shop</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Men</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Women</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Support</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                        <div className="mt-8">
                            <p className="text-xs text-gray-500">© 2026 Monarch. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
