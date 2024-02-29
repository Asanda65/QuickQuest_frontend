// components/PopularWorkers.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function PopularWorkers() {
    const workers = [
        {
            name: "Mahinda Rajapaksha",
            imageUrl: "/images/construction-pp.jpg",
            tasks: ["cleaning", "baby-sitting"],
            rating: 3,
        },
        {
            name: "Mahinda Rajapaksha",
            imageUrl: "/images/construction-pp.jpg",
            tasks: ["cleaning", "baby-sitting"],
            rating: 3,
        },
        {
            name: "Mahinda Rajapaksha",
            imageUrl: "/images/construction-pp.jpg",
            tasks: ["cleaning", "baby-sitting"],
            rating: 3,
        },
        {
            name: "Mahinda Rajapaksha",
            imageUrl: "/images/construction-pp.jpg",
            tasks: ["cleaning", "baby-sitting"],
            rating: 3,
        },
        {
            name: "Mahinda Rajapaksha",
            imageUrl: "/images/construction-pp.jpg",
            tasks: ["cleaning", "baby-sitting"],
            rating: 3,
        },

        // ... other workers
    ];



    return (
        <div className="container mx-auto px-28 py-6">
            <h2 className="text-lg font-bold mb-14 text-left pl-4 text-black">Popular Workers near you</h2>
            <div className="flex  justify-center gap-12 flex-wrap">
                {workers.map((worker, index) => (
                    <div key={index} className="bg-white rounded-lg mt-12 p-6 shadow-md text-center relative inline-block">
                        <img
                            src={worker.imageUrl}
                            alt={worker.name}
                            className="rounded-full w-24 h-24 object-cover absolute -top-12 left-1/2 transform -translate-x-1/2"
                        />
                        <div className="pt-16 pb-4">
                            <h3 className="text-base text-black font-medium">{worker.name}</h3>
                            <div className="flex justify-center mt-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                            <div className="my-2">{/* renderStars(worker.rating) should be defined elsewhere */}</div>
                            <p className="font-semibold text-base text-black mb-2">Tasks:</p>
                            <div className="flex justify-center mb-4 space-x-2">
                                <img src="/images/construction-icon.png" alt="Construction" className="h-5 w-5" />
                                <img src="/images/cleaning-icon.png" alt="Cleaning" className="h-5 w-5" />
                            </div>
                            <button className="bg-teal-500 text-white px-8 py-2 rounded-md">Hire</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
