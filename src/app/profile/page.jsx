"use client"
import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../globals.css';
import AuthRoute from '../(auth)/AuthRoute';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const OrderCard = ({ order }) => {
  const { _id, service, worker, orderedDate, deliveryDate, price } = order;
  const [isLoading, setIsLoading] = useState(false);

  const handleCancelOrder = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    const confirmCancel = await Swal.fire({
      title: 'Cancel Order',
      text: 'Are you sure you want to cancel this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!'
    });

    if (confirmCancel.isConfirmed) {
      try {
        const response = await axios.post(`https://api.quick-quest.dfanso.dev/v1/jobs/cancel/${_id}`, null, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        Swal.fire('Order Canceled', response.data.message, 'success');
        window.location.href = '/profile';
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error');
      }
    }

    setIsLoading(false);
  };

  const handleCompleteOrder = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(`https://api.quick-quest.dfanso.dev/v1/jobs/complete/${_id}`, null, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      Swal.fire('Order Completed', response.data.message, 'success');
      window.location.href = '/profile';
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-4 mx-4 mx-20 items-center justify-between p-4 bg-white rounded text-black shadow" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
      <img src={worker.profileImage} alt={`${worker.firstName} ${worker.lastName}`} className="rounded-full h-12 w-12 mb-4 sm:mb-0" />
      <span>{`${worker.firstName} ${worker.lastName}`}</span>
      <span className="flex items-center">
        <img src={service.category.iconUrl} alt="Task Icon" className="h-6 w-6 mr-2" />
        {service.name}
      </span>
      <span>Due on {new Date(deliveryDate).toLocaleDateString()}</span>
      <span>${price}</span>
      <div className='flex md:mt-0 mt-2'>
        <button
          className="bg-teal-500 hover:bg-teal-800 duration-700 text-white py-1.5 px-4 rounded"
          onClick={handleCompleteOrder}
          disabled={isLoading}
        >
          Mark as Complete
        </button>
        <button
          className="ml-2 bg-transparent hover:bg-red-500 text-red-500 duration-700 font-semibold hover:text-white py-1.5 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={handleCancelOrder}
          disabled={isLoading}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const PastOrderCard = ({ order }) => {
  const { service, worker, orderedDate, deliveryDate, price, status } = order;
  return (
    <div className="flex flex-col sm:flex-row mt-4 mx-4 mx-20 items-center justify-between p-4 bg-white rounded text-black shadow" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
      <img src={worker.profileImage} alt={`${worker.firstName} ${worker.lastName}`} className="rounded-full h-12 w-12 mb-4 sm:mb-0" />
      <span>{`${worker.firstName} ${worker.lastName}`}</span>
      <span className="flex items-center">
        <img src={service.category.iconUrl} alt="Task Icon" className="h-6 w-6 mr-2" />
        {service.name}
      </span>
      <span>Due on {new Date(deliveryDate).toLocaleDateString()}</span>
      <span>${price}</span>
      <div className='flex md:mt-0 mt-2'>
        <button className="bg-teal-500 hover:bg-teal-800 duration-700 text-white py-1.5 px-4 rounded">
          {status === 'CANCELLED' ? 'Cancelled' : 'Delivered'}
        </button>
      </div>
    </div>
  );
};

const UserProfilePage = () => {
  const [ongoingOrders, setOngoingOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        // Delay of 2 seconds before fetching user profile
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Fetch user profile
        const profileResponse = await axios.get('https://api.quick-quest.dfanso.dev/v1/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const { location, firstName, lastName, profileImage } = profileResponse.data;
        const { coordinates } = location;
        const [longitude, latitude] = coordinates;

        // Reverse geocode the coordinates to get the location name
        const geocodingUrl = `https://us1.locationiq.com/v1/reverse?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
        const geocodingResponse = await fetch(geocodingUrl);
        const geocodingData = await geocodingResponse.json();

        const locationName = geocodingData.display_name || '';

        setUserProfile({ firstName, lastName, profileImage, longitude, latitude, locationName });

        // Delay of 2 seconds before fetching ongoing orders
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Fetch ongoing orders
        const ongoingOrdersResponse = await axios.get('https://api.quick-quest.dfanso.dev/v1/jobs?status=PENDING', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOngoingOrders(ongoingOrdersResponse.data);

        // Delay of 2 seconds before fetching past orders
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Fetch past orders (canceled and delivered)
        const pastOrdersResponse = await axios.get('https://api.quick-quest.dfanso.dev/v1/jobs?status=CANCELLED', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const canceledOrders = pastOrdersResponse.data;

        const deliveredOrdersResponse = await axios.get('https://api.quick-quest.dfanso.dev/v1/jobs?status=COMPLETED', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const deliveredOrders = deliveredOrdersResponse.data;

        setPastOrders([...canceledOrders, ...deliveredOrders]);

        setIsLoading(false); // Hide loader after fetching all data
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Hide loader in case of error
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <AuthRoute>
        {isLoading && (
          <div className="flex items-center justify-center h-screen">
            <ThreeDots color="#4FB8B3" height={80} width={80} />
          </div>
        )}
        {!isLoading && (
          <div className="text-black mt-6">
            <img src={userProfile?.profileImage} alt="User Name" className="rounded-full h-24 w-24 mx-auto text-center" />
            <h1 className="text-xl font-medium mt-4 text-center">{userProfile?.firstName} {userProfile?.lastName}</h1>
            <div className="flex items-center justify-center mt-1">
              <FaMapMarkerAlt className='text-teal-500 mr-1' />
              <span className='text-sm'>{userProfile?.locationName}</span>
            </div>
            <div className='mx-4 sm:mx-20'>
              {ongoingOrders.length > 0 && (
                <>
                  <h2 className="text-lg font-medium mt-8 mb-6 " style={{ textAlign: 'left' }}>Ongoing Orders</h2>
                  {ongoingOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))}
                </>
              )}
              {pastOrders.length > 0 && (
                <>
                  <h2 className="text-lg font-medium mt-8 mb-6 " style={{ textAlign: 'left' }}>Past Orders</h2>
                  {pastOrders.map((order, index) => (
                    <PastOrderCard key={index} order={order} />
                  ))}
                </>
              )}
              {ongoingOrders.length === 0 && pastOrders.length === 0 && (
                <p className="text-center mt-8">No orders to display.</p>
              )}
              <div className='mb-12'></div>
            </div>
          </div>
        )}
      </AuthRoute>
    </>
  );
};

export default UserProfilePage;