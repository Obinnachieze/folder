import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase text-black">
                            Monarch
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:space-x-8">
                        <Link to="/" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-widest">
                            Home
                        </Link>
                        <Link to="/shop" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-widest">
                            Shop
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 text-black hover:text-gray-600 relative"
                        >
                            <ShoppingBag className="h-6 w-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <div className="-mr-2 flex items-center sm:hidden ml-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-black hover:text-gray-600"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-white border-b border-black">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="text-black hover:bg-black hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            className="text-black hover:bg-black hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
