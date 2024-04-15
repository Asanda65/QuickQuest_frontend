'use client';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';

export default function OneServicePopularWorkers() {
    const [workers, setWorkers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const serviceId = searchParams.get('serviceId');
    const router = useRouter();

    const fetchWorkers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.quick-quest.dfanso.dev/v1/services/${serviceId}/workers`, {
                headers: {
                    'accept': '*/*'
                }
            });
            setWorkers(response.data);
        } catch (error) {
            console.error('Error fetching workers:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (serviceId) {
            fetchWorkers();
        }
    }, [serviceId]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, // For mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 py-6">
            <h2 className="text-lg font-medium mb-6 text-left pl-4 text-black"></h2>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <ThreeDots color="#4FB8B3" height={80} width={80} />
                </div>
            ) : workers.length === 1 ? (
                <div className="px-4">
                    <div className="bg-white rounded-lg shadow-md text-center relative mb-4">
                        <img
                            src={workers[0].profileImage}
                            alt={`${workers[0].firstName} ${workers[0].lastName}`}
                            className="rounded-full w-24 h-24 object-cover mx-auto"
                            style={{ top: '-3rem' }}
                        />
                        <div className="pt-16 pb-4">
                            <h3 className="text-base text-black font-medium">{`${workers[0].firstName} ${workers[0].lastName}`}</h3>
                            <div className="flex justify-center mt-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < workers[0].feedbackSummary.avgRating ? "text-yellow-400" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="font-semibold text-base text-black mb-2">About Me:</p>
                            <p className="text-gray-600 mb-4">{workers[0].aboutMe}</p>
                            <button
                                className="bg-teal-500 text-white px-8 py-2 rounded-md"
                                onClick={() => router.push(`/workerProfile?workerId=${workers[0]._id}`)}
                            >
                                Hire
                            </button>
                        </div>
                    </div>
                </div>
            ) : workers.length < 5 ? (
                workers.map((worker, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white rounded-lg shadow-md text-center relative mb-4">
                            <img
                                src={worker.profileImage}
                                alt={`${worker.firstName} ${worker.lastName}`}
                                className="rounded-full w-24 h-24 object-cover mx-auto"
                                style={{ top: '-3rem' }}
                            />
                            <div className="pt-16 pb-4">
                                <h3 className="text-base text-black font-medium">{`${worker.firstName} ${worker.lastName}`}</h3>
                                <div className="flex justify-center mt-2 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < worker.feedbackSummary.avgRating ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>
                                <p className="font-semibold text-base text-black mb-2">About Me:</p>
                                <p className="text-gray-600 mb-4">{worker.aboutMe}</p>
                                <button
                                    className="bg-teal-500 text-white px-8 py-2 rounded-md"
                                    onClick={() => router.push(`/workerProfile?workerId=${worker._id}`)}
                                >
                                    Hire
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Slider {...settings}>
                    {workers.map((worker, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white rounded-lg shadow-md text-center relative mb-4">
                                <img
                                    src={worker.profileImage}
                                    alt={`${worker.firstName} ${worker.lastName}`}
                                    className="rounded-full w-24 h-24 object-cover mx-auto"
                                    style={{ top: '-3rem' }}
                                />
                                <div className="pt-16 pb-4">
                                    <h3 className="text-base text-black font-medium">{`${worker.firstName} ${worker.lastName}`}</h3>
                                    <div className="flex justify-center mt-2 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={i < worker.feedbackSummary.avgRating ? "text-yellow-400" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <p className="font-semibold text-base text-black mb-2">About Me:</p>
                                    <p className="text-gray-600 mb-4">{worker.aboutMe}</p>
                                    <button
                                        className="bg-teal-500 text-white px-8 py-2 rounded-md"
                                        onClick={() => router.push(`/workerProfile?workerId=${worker._id}`)}
                                    >
                                        Hire
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}