"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BidsList from "../../components/bidsCard";
import BidForm from "../../components/bidForm";
import AuthRoute from "../(auth)/AuthRoute";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const JobPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleServiceClick = (categoryName) => {
    setSelectedCategory(categoryName);
    fetchServices(categoryName);
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.quick-quest.dfanso.dev/v1/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchServices = async (categoryName) => {
    setIsLoading(true);
    try {
      const categoryId = categories.find(
        (category) => category.name === categoryName
      )._id;
      const response = await axios.get(
        `https://api.quick-quest.dfanso.dev/v1/services?category=${categoryId}`
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <AuthRoute>
        <div className="flex flex-col my-10 mx-4 sm:mx-20 items-center justify-center p-6 py-8 bg-teal-500 rounded-lg shadow">
          <h1 className="text-xl font-bold mb-2">Create your own bid</h1>
          <h2 className="text-base mb-8">Choose the service you want</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleServiceClick(category.name)}
                  className="flex flex-row sm:flex-row items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
                >
                  <img
                    src={category.iconUrl}
                    alt={category.name}
                    className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2"
                  />
                  <span className="text-teal-500">{category.name}</span>
                </button>
              ))}
            </div>
        </div>
        {selectedCategory && (
          <BidForm category={selectedCategory} services={services} />
        )}
        <div className="mt-4 mx-14"></div>
        <BidsList />
      </AuthRoute>
    </>
  );
};

export default JobPage;