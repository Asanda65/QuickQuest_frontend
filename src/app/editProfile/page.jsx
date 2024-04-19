"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import LocationPicker from '../../components/signupLocationInput'; // Adjust import if needed
import { ThreeDots } from 'react-loader-spinner';

export default function EditProfile() {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log(profile, image);
    };



    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6'>
            <h1 className="text-lg font-medium text-black">Get Started</h1>
            <p className="text-center text-base my-2 mb-4" style={{ color: "#02615D" }}>Welcome to QuickQuest - lets create your account</p>
            <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full overflow-hidden mb-4">
                <input type="file" id="imageUpload" className="hidden" onChange={handleImageUpload} />
                <label htmlFor="imageUpload" className="cursor-pointer">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Profile" className="w-24 h-24 rounded-full" />
                    ) : (
                        <img src="/images/profile-icon.png" alt="Profile" className="w-24 h-24 rounded-full" />
                    )}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <FontAwesomeIcon icon={faCamera} className="text-white" />
                        <span className="text-white text-xs">Add image</span>
                    </div>
                </label>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-1 rounded-md shadow-sm`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-1 rounded-md shadow-sm`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                </div>
                <LocationPicker onLocationSelect={(location) => setProfile({ ...profile, location })} />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}

                <div className='flex items-center justify-center mt-4'>
                    <button type="submit" className="w-2/5 bg-teal-500 text-white text-base rounded-md py-2 mb-2 hover:bg-teal-600">
                        Submit
                    </button></div>
            </form>
        </div>
    );
}
