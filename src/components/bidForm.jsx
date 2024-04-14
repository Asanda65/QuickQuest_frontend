import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Import the close icon from react-icons

const BidForm = ({ service }) => {
  const [formData, setFormData] = useState({
    serviceType: service,
    budget: '',
    expiryDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-teal-500 mx-4 sm:mx-20 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between border-b border-teal-300 pb-4">
        <h2 className="text-xl font-bold text-white">Create your own bid</h2>
        {/* <IoClose className="text-white text-2xl cursor-pointer" /> */}
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:items-center sm:justify-between mt-4">
        <div className="flex items-center space-x-2 bg-white p-2 rounded">
          <IoClose className="text-teal-500" />
          <img src="/images/construction-icon.png" alt="Construction" className="h-6" />
          <span className="text-teal-500 font-medium">{service}</span>
        </div>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="flex-grow bg-white p-2 rounded text-black"
        >
          <option value="Commercial construction text-black">Commercial construction</option>
          {/* Add more options here */}
        </select>
        <div className="flex-grow">
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded text-black focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-white pr-2">Expiry Date</span>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="bg-white p-2 rounded text-black focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor="description" className="block text-sm font-medium text-white">
          Describe the bid
        </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-white p-2 rounded mt-2 text-black focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        ></textarea>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-white text-teal-500 py-2 px-4 rounded font-medium"
        >
          Create a bid
        </button>
      </div>
    </div>
  );
};

export default BidForm;
