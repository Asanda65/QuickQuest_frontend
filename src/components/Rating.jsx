import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingComponent = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="p-2 bg-white rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-gray-700 mb-2 text-center">Rate the service</p>
            <div className="flex items-center justify-center mb-4 space-x-1 py-2">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <FaStar
                            key={index}
                            className={`h-8 w-8 cursor-pointer transition-colors duration-150 ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(ratingValue)}
                        />
                    );
                })}
            </div>
            <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:none focus:none focus:none"
                rows="3"
                placeholder="Leave a comment..."
            ></textarea>
            <button className="mt-2 w-full py-2 duration-700 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Submit
            </button>
        </div>
    );
};

export default RatingComponent;
