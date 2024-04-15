"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import '../globals.css';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LabourPageServices from "../../components/servicesLabourPublic";
import CustomerFeedback from "../../components/customerFeedback";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';

const LabourPublicPage = () => {
  const [worker, setWorker] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [workerLocation, setWorkerLocation] = useState('');
  const router = useRouter();

  const fetchWorkerProfile = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.quick-quest.dfanso.dev/v1/workers/65e6dd46dc5b9dffcf5b7b17/profile');
      setWorker(response.data);
      const [longitude, latitude] = response.data.location.coordinates;
      const locationName = await getLocationName(latitude, longitude);
      setWorkerLocation(locationName);
    } catch (error) {
      console.error('Error fetching worker profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getLocationName = async (latitude, longitude) => {
    try {
      const geocodingUrl = `https://us1.locationiq.com/v1/reverse?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
      const geocodingResponse = await fetch(geocodingUrl);
      const geocodingData = await geocodingResponse.json();
      return geocodingData.display_name || '';
    } catch (error) {
      console.error('Error fetching location name:', error);
      return '';
    }
  };

  useEffect(() => {
    fetchWorkerProfile();
  }, []);

  const cardStyle = {
    borderRadius: '15px',
    background: '#FFF',
    boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)',
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ThreeDots color="#4FB8B3" height={80} width={80} />
        </div>
      ) : worker ? (
        <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4 justify-center mt-4 items-center md:px-14">
          <div style={cardStyle} className="bg-white p-4 flex-1 pt-8 min-h-96">
            <div className="flex flex-row md:items-center">
              <img
                src={worker.profileImage}
                alt="Profile"
                className="rounded-full h-20 w-20 object-cover mr-4"
              />
              <div>
                <h2 className="text-lg font-medium text-black pb-2">
                  {worker.firstName} {worker.lastName}
                </h2>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(worker.feedbackSummary.avgRating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="text-sm ml-2 text-black">
                    {worker.feedbackSummary.avgRating} ({worker.feedbackSummary.feedbackCount})
                  </span>
                </div>
                <div className="flex items-center my-2">
                  <FaMapMarkerAlt className="text-teal-500 mr-1" />
                  <span className='text-black text-sm'>{workerLocation}</span>
                </div>
                <div className="flex">
                {Array.from(new Set(worker.services.map(service => service.category.iconUrl))).map((iconUrl, i) => (
                  <img
                    key={i}
                    src={iconUrl}
                    alt={worker.services.find(service => service.category.iconUrl === iconUrl).category.name}
                    className="h-5 w-5 mr-2"
                  />
                ))}
              </div>
              </div>
            </div>
            <h3 className="text-md font-semibold mt-4 text-black">About</h3>
            <p className="text-sm text-gray-600">{worker.aboutMe}</p>
          </div>

          <div style={cardStyle} className="bg-white p-4 flex-1 w-full flex flex-col justify-between md:min-h-96">
            <div className="bg-teal-500 text-white text-lg font-semibold rounded-t-xl p-2 text-center">Contact Me</div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 px-4 rounded-md w-full mt-6 md:mt-0 md:w-2/5 mb-2 transition ease-in duration-200">
                Quick Chat
              </button>
              <button className="bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 px-4 rounded-md w-full md:w-2/5 mb-4 transition ease-in duration-200">
                Negotiate an offer
              </button>
              <span className="text-sm text-gray-600">Average Response Time: 1hr</span>
            </div>
            {/* Intentionally left blank for spacing */}
            <div></div>
          </div>
        </div>
      ) : (
        <div>No worker profile found.</div>
      )}
      {worker && worker.services && <LabourPageServices workerServices={worker.services} />}
      <div className="flex flex-col items-center justify-center flex-grow mb-6">
        <Link href="/servicePage">
          <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-1.5 px-8 rounded-md  mb-2 transition ease-in duration-200">
            View All
          </button>
        </Link>
      </div>
      {worker && worker.feedbacks && <CustomerFeedback feedbacks={worker.feedbacks} />}
    </>
  );
};

export default LabourPublicPage;
