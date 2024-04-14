import React from 'react';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/globals.css';

const PaymentCancelled = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center min-h-screen'>
                {/* w-96 is an example, you can use a different width class as needed */}
                <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-xl w-1/3" style={{ boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)' }}>
                    <MdClose className="text-red-500 text-6xl" />
                    <h2 className="text-xl font-semibold text-red-900 mt-4">Payment cancelled</h2>
                    <p className="text-gray-600 mt-4 mb-6">Your payment was not successful <br />No charges have been made.</p>
                    <Link href="/payment">
                        <span className="bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                            Retry Payment
                        </span>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentCancelled;
