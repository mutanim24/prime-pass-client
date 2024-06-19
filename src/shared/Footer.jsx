import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700 py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h5 className="text-lg font-semibold">Prime Pass</h5>
                    <p className="text-sm">&copy; 2024 Prime Pass. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                    <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="/contact" className="text-sm hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
