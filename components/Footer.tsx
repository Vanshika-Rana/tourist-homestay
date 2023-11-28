import React from 'react';
import Image from 'next/image';
import { FiPhone, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-red-400 p-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Logo and Company Name on the left */}
                <div className="flex items-center mb-4 lg:mb-0">
                    <Image
                        src="/images/logo-black.png" // Replace with the actual path to your logo image
                        alt="Manodaya Homes Logo"
                        width={100}
                        height={100}
                    />
                    <p className="ml-2 text-3xl font-bold">Manodaya Homes</p>
                </div>

                {/* Contact information on the right */}
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:mr-8">
                        <p className="text-xl font-bold text-black">Contact Us</p>
                        <div className="flex items-center mt-2">
                            <div className="mr-4">
                                <FiPhone size={20} />
                            </div>
                            <p className="mr-4">+91 9543765554, +91 7310554723</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div>
                                <FiMail size={20} />
                            </div>
                            <p className="ml-2">manodaya.homes@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
