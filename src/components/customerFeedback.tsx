import React, { useState } from 'react';
import { FaStar, FaCaretDown } from 'react-icons/fa';
import '../styles/globals.css';

const CustomerFeedback = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const reviews = [
        {
            userName: "Ambala Anuhas",
            rating: 4,
            text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            imageUrl: "/images/construction.png",
            userProfilePic: "/images/worker1-img.jpg",
        },
        {
            userName: "Ambala Anuhas",
            rating: 4,
            text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            imageUrl: "/images/commercial-construction.png",
            userProfilePic: "/images/worker1-img.jpg",
        },
        {
            userName: "Ambala Anuhas",
            rating: 4,
            text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            imageUrl: "/images/bridal-makeup.png",
            userProfilePic: "/images/worker1-img.jpg",
        },
        {
            userName: "Ambala Anuhas",
            rating: 4,
            text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
            imageUrl: "/images/commercial-construction.png",
            userProfilePic: "/images/worker1-img.jpg",
        },
    ];


    // Toggle dropdown visibility
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Card style
    const cardStyle = {
        borderRadius: '8px',
        boxShadow: '0px 0px 4px 0px rgba(79, 184, 179, 0.25)',
        background: '#FFFFFF',
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-800 mb-6">Customer feedback</h1>


                <div>

                    <div className="relative">
                        <div
                            onClick={toggleDropdown}
                            className="inline-flex items-center border border-teal-500 bg-white px-2 py-1 rounded-md cursor-pointer"
                        >
                            <span className="text-teal-500 mr-1">Recent</span>
                            <FaCaretDown className='text-teal-500' />
                        </div>

                        {dropdownOpen && (
                            <ul className="absolute z-10 mt-1 w-32 border border-gray-200 bg-white shadow-md rounded-md py-1">
                                <li className="px-4 py-2 hover:bg-gray-100 text-teal-500 cursor-pointer">Recent</li>
                                <li className="px-4 py-2 hover:bg-gray-100 text-teal-500 cursor-pointer">Oldest</li>
                                {/* Add more dropdown items as needed */}
                            </ul>
                        )}

                    </div>
                    {/* <span className="text-gray-600 text-sm">67 Reviews</span> */}
                </div>

            </div>
            {reviews.map((review, index) => (
                <div key={index} style={cardStyle} className="flex flex-col md:flex-row  items-center p-4 rounded-lg mb-8">
                    <img
                        src={review.imageUrl}
                        alt="Service"
                        className="md:w-36 md:h-36 w-full h-full object-cover rounded-lg mr-4 md:mb-0 mb-4"  // Adjust size as needed
                    />
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <img
                                    src={review.userProfilePic}
                                    alt={review.userName}
                                    className="w-9 h-9 object-cover rounded-full mr-4"
                                />
                                <span className="font-semibold text-gray-800">{review.userName}</span>
                            </div>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4">{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerFeedback;
