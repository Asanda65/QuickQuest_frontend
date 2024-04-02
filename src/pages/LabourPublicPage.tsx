import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/globals.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import LabourPageServices from "./../components/servicesLabourPublic";

const LabourPublicPage = () => {
  const worker = {
    name: 'Ambala Anuhas',
    rating: 1.4,
    totalRatings: 200,
    location: 'Nattandiya',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, ...',
    services: ['/images/construction-icon.png', '/images/cleaning-icon.png'],
  };

  const cardStyle = {
    borderRadius: '15px',
    background: '#FFF',
    boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)',
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4 justify-center mt-4 items-center md:px-14">
        <div style={cardStyle} className="bg-white p-4 flex-1 pt-8 min-h-96">
          <div className="flex flex-row md:items-center">
            <img src="/images/worker1-img.jpg" alt="Profile" className="rounded-full h-20 w-20 object-cover mr-4" />
            <div>
              <h2 className="text-lg font-medium text-black pb-2">{worker.name}</h2>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(worker.rating) ? "text-yellow-400" : "text-gray-300"} />
                ))}
                <span className="text-sm ml-2 text-black">{worker.rating} ({worker.totalRatings})</span>
              </div>
              <div className="flex items-center my-2">
                <FaMapMarkerAlt className="text-teal-500 mr-1" />
                <span className='text-black text-sm'>{worker.location}</span>
              </div>
              <div className="flex">
                {worker.services.map((service, i) => (
                  <img key={i} src={service} alt="Service" className="h-5 w-5 mr-2" />
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-md font-semibold mt-4 text-black">About</h3>
          <p className="text-sm text-gray-600">{worker.about}</p>
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
      <LabourPageServices />
      <Footer />
    </>
  );
};

export default LabourPublicPage;
