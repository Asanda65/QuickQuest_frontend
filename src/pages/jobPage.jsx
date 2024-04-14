import React, { useState } from 'react';
import '../styles/globals.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BidsList from "../components/bidsCard";
import BidForm from "../components/bidForm"; 

const services = [
    { name: 'Cleaning', iconSrc: '/images/cleaning-icon.png' },
    { name: 'Gardening', iconSrc: '/images/gardening-service-icon.png' },
    { name: 'Baby-sitting', iconSrc: '/images/baby-sitting-icon.png' },
    { name: 'Hair & Makeup', iconSrc: '/images/hair-makeup-icon.png' },
    { name: 'Tech Support', iconSrc: '/images/tech-support-icon.png' },
    { name: 'Plumbing', iconSrc: '/images/plumbing-icon.png' },
    { name: 'Catering', iconSrc: '/images/Catering-icon.png' },
    { name: 'Tutoring', iconSrc: '/images/Tutoring-icon.png' },
    { name: 'Event Planning', iconSrc: '/images/event-planing-icon.png' },
    { name: 'Construction', iconSrc: '/images/construction-icon.png' },

];

const JobPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceName) => {
        setSelectedService(serviceName);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col my-10 mx-4 sm:mx-20 items-center justify-center p-6 py-8 bg-teal-500 rounded-lg shadow">
                <h1 className="text-xl font-bold mb-2">Create your own bid</h1>
                <h2 className="text-base mb-8">Choose the service you want</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
                    {services.map((service) => (
                        <button
                            key={service.name}
                            onClick={() => handleServiceClick(service.name)}
                            className="flex flex-row sm:flex-row items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
                        >
                            <img src={service.iconSrc} alt={service.name} className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
                            <span className="text-teal-500">{service.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedService && <BidForm service={selectedService} />}
            <div className='mt-4 mx-14'></div>
            <BidsList />
            <Footer />
        </>
    );
};

export default JobPage;
