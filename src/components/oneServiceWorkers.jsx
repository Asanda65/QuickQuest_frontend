"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';

export default function ServicePopularWorkers({ serviceId }) {
  const [workers, setWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const router = useRouter();

  const fetchWorkers = async (token, serviceId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/workers/nearby?serviceId=${serviceId}`, {
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`
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
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    if (storedToken && serviceId) {
      fetchWorkers(storedToken, serviceId);
    }
  }, [serviceId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: workers.length < 5 ? workers.length : 5, // Ensures the slider shows all workers if fewer than 5
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: workers.length < 3 ? workers.length : 3, // Show all workers if fewer than 3 for devices wider than 1024px
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: workers.length < 2 ? workers.length : 2, // Show all workers if fewer than 2 for devices wider than 768px
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1, // Always show 1 worker on the smallest screens
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleHireClick = (workerId) => {
    router.push(`/workerProfile?workerId=${workerId}`);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 py-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-6 pl-8 md:pl-0">Recommended Workers Around You</h1>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <ThreeDots color="#4FB8B3" height={80} width={80} />
        </div>
      ) : workers.length === 1 ? (
        <div className="px-4">
          {/* <h2 className="text-lg font-medium mb-6 text-left pl-4 text-black">Recommended Workers around you</h2> */}
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
                onClick={() => handleHireClick(workers[0]._id)}
              >
                Hire
              </button>
            </div>
          </div>
        </div>
      ) : workers.length < 2 ? (
        workers.map((worker, index) => (
          <div key={index} className="px-4">
            {/* <h2 className="text-lg font-medium mb-6 text-left pl-4 text-black">Recommended Workers around you</h2> */}
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
                  onClick={() => handleHireClick(worker._id)}
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
              {/* <h2 className="text-lg font-medium mb-6 text-left pl-4 text-black">Recommended Workers around you</h2> */}
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
                    onClick={() => handleHireClick(worker._id)}
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