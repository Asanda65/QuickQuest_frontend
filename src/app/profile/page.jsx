"use client"
"use client"
import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../globals.css';
import AuthRoute from '../(auth)/AuthRoute';
import axios from 'axios';

const OrderCard = ({ profilePic, name, task, dueDate, price }) => {
  return (
    // Updated for responsiveness
    <div className="flex flex-col sm:flex-row mt-4 mx-4 mx-20 items-center justify-between p-4 bg-white rounded text-black shadow" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
      <img src={profilePic} alt={name} className="rounded-full h-12 w-12 mb-4 sm:mb-0" />
      <span>{name}</span>
      <span className="flex items-center">
        <img src="/images/construction-icon.png" alt="Task Icon" className="h-6 w-6 mr-2" />
        {task}
      </span>
      <span>Due on {dueDate}</span>
      <span>{price}</span>
      <div className='flex md:mt-0 mt-2'>
        <button className="bg-teal-500 hover:bg-teal-800 duration-700 text-white py-1.5 px-4 rounded">Mark as Complete</button>
        <button className="ml-2 bg-transparent hover:bg-red-500 text-red-500 duration-700 font-semibold hover:text-white py-1.5 px-4 border border-red-500 hover:border-transparent rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};


const PastOrderCard = ({ profilePic, name, task, dueDate, price }) => {
  return (
    // Updated for responsiveness
    <div className="flex flex-col sm:flex-row mt-4 mx-4 mx-20 items-center justify-between p-4 bg-white rounded text-black shadow" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
      <img src={profilePic} alt={name} className="rounded-full h-12 w-12 mb-4 sm:mb-0" />
      <span>{name}</span>
      <span className="flex items-center">
        <img src="/images/construction-icon.png" alt="Task Icon" className="h-6 w-6 mr-2" />
        {task}
      </span>
      <span>Due on {dueDate}</span>
      <span>{price}</span>
      <div className='flex md:mt-0 mt-2'>
        <button className="bg-teal-500 hover:bg-teal-800 duration-700 text-white py-1.5 px-4 rounded">Delivered</button>
      </div>
    </div>
  );
};

const UserProfilePage = () => {
  const [orders, setOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching ongoing orders
    const fetchedOrders = [
      {
        profilePic: "/images/test-prof-1.png",
        name: "Tush Sanuth",
        task: "Industrial Construction",
        dueDate: "01/04/2024",
        price: "$300"
      },
      // Add more ongoing orders here
    ];

    // Simulate fetching past orders
    const fetchedPastOrders = [
      {
        profilePic: "/images/test-prof-1.png",
        name: "Nila Pathirana",
        task: "Residential Building",
        dueDate: "12/12/2023",
        price: "$250"
      },
      {
        profilePic: "/images/test-prof-1.png",
        name: "Nila Pathirana",
        task: "Residential Building",
        dueDate: "12/12/2023",
        price: "$250"
      },
      {
        profilePic: "/images/test-prof-1.png",
        name: "Nila Pathirana",
        task: "Residential Building",
        dueDate: "12/12/2023",
        price: "$250"
      },
      // Add more past orders here
    ];

    setOrders(fetchedOrders);
    setPastOrders(fetchedPastOrders);
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('https://api.quick-quest.dfanso.dev/v1/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        const { location, firstName, lastName,profileImage} = response.data;
        console.log(response.data)
        const { coordinates } = location;
        const [longitude, latitude] = coordinates;
  
        // Reverse geocode the coordinates to get the location name
        const geocodingUrl = `https://us1.locationiq.com/v1/reverse?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
        const geocodingResponse = await fetch(geocodingUrl);
        const geocodingData = await geocodingResponse.json();
  
        const locationName = geocodingData.display_name || '';
  
        setUserProfile({ firstName,lastName,profileImage, longitude, latitude, locationName });
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
  
    fetchUserProfile();
  }, []);

  return (
    <>
    <AuthRoute>
      <div className="text-black mt-6">
        <img src={userProfile?.profileImage} alt="User Name" className="rounded-full h-24 w-24 mx-auto text-center" />
        <h1 className="text-xl font-medium mt-4 text-center">{userProfile?.firstName} {userProfile?.lastName}</h1>
        <div className="flex items-center justify-center mt-1">
          <FaMapMarkerAlt className='text-teal-500 mr-1' />
          <span className='text-sm'>{userProfile?.locationName}</span>
        </div>
        <div className='mx-4 sm:mx-20'>
          <h2 className="text-lg font-medium mt-8 mb-6 " style={{ textAlign: 'left' }}>Ongoing Orders</h2>
          {orders.map((order, index) => (
            <OrderCard
              key={index}
              profilePic={order.profilePic}
              name={order.name}
              task={order.task}
              dueDate={order.dueDate}
              price={order.price}
            />
          ))}
          <h2 className="text-lg font-medium mt-8 mb-6 " style={{ textAlign: 'left' }}>Past Orders</h2>
          {pastOrders.map((order, index) => (
            <PastOrderCard
              key={index}
              profilePic={order.profilePic}
              name={order.name}
              task={order.task}
              dueDate={order.dueDate}
              price={order.price}
            />
          ))}
          <div className='mb-12'></div>
        </div>
      </div>
      </AuthRoute>
    </>
  );
  
};

export default UserProfilePage;

