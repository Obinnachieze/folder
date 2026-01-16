import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow bg-white">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
