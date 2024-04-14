import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaStar, FaCaretDown } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-800">Customer feedback</h1>
                <div className="relative">
                    <div onClick={toggleDropdown} className="inline-flex items-center border border-teal-500 bg-white md:px-2 px-1 py-1 rounded-md cursor-pointer">
                        <span className="text-teal-500 mr-1 md:text-base text-xs">Sort</span>
                        <FaCaretDown className='text-teal-500' />
                    </div>
                    {dropdownOpen && (
                        <ul className="absolute z-10 mt-1 md:w-32 w-16 border border-gray-200 bg-white shadow-md rounded-md py-1">
                            <li className="px-4 py-2 hover:bg-gray-100 text-teal-500 cursor-pointer md:text-base text-xs">Recent</li>
                            <li className="px-4 py-2 hover:bg-gray-100 text-teal-500 cursor-pointer md:text-base text-xs">Oldest</li>
                        </ul>
                    )}
                </div>
            </div>
            {/* Slider for mobile view */}
            <div className="md:hidden md:mb-0 mb-6">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="mb-8">
                            {/* Service image */}
                            <img
                                src={review.imageUrl}
                                alt="Service"
                                className="w-full h-auto object-cover rounded-lg mb-2"
                            />
                            <div className="flex items-start">
                                {/* Profile picture */}
                                <img
                                    src={review.userProfilePic}
                                    alt={review.userName}
                                    className="w-12 h-12 object-cover rounded-full  mr-4 mt-2 md:mt-0 md:mr-2"
                                />
                                <div className="flex flex-col flex-1">
                                    {/* Username */}
                                    <span className="font-semibold text-gray-800">{review.userName}</span>
                                    {/* Star rating */}
                                    <div className="flex mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Review text */}
                            <p className="text-gray-600 mt-2">{review.text}</p>
                        </div>
                    ))}

                </Slider>
            </div>
            {/* Regular view for non-mobile screens */}
            <div className="hidden md:block">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center p-4 rounded-lg mb-8 bg-white shadow" style={{ borderRadius: '8px' }}>
                        <img src={review.imageUrl} alt="Service" className="md:w-36 md:h-36 w-full h-full object-cover rounded-lg mr-4 md:mb-0 mb-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center">
                                    <img src={review.userProfilePic} alt={review.userName} className="w-9 h-9 object-cover rounded-full mr-4" />
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
        </div>
    );
};

export default CustomerFeedback;
