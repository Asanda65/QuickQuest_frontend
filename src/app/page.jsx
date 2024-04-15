'use client';
import Navbar from "../components/Navbar";
import RecommendedServices from "../components/RecommendedServices";
import PopularWorkers from "../components/popularWorkers";
import PopularServices from "../components/poplarServices";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.quick-quest.dfanso.dev/v1/categories', {
        headers: {
          'accept': '*/*'
        }
      });
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center space-x-0 mt-4 py-6 md:py-8">
          <input
            type="text"
            placeholder="What do you want to get done?"
            className="p-2 w-2/4 md:w-1/4 border border-gray-400 rounded-l-lg text-sm md:text-base"
          />
          <button className="bg-teal-500 text-white font-medium px-6 py-2 rounded-r-lg border border-gray-400">
            Find Workers
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <ThreeDots color="#4FB8B3" height={80} width={80} />
          </div>
        ) : (
          <>
            {/* Services Section for Desktop Views */}
            <div className="hidden sm:hidden md:grid md:grid-cols-5 gap-4 justify-items-center mt-1 md:mt-12 mb-12">
              {categories
                .map((category) => (
                  <div key={category._id} className="text-center space-y-2">
                    <div className="p-4 rounded-full">
                      <img
                        src={category.iconUrl}
                        alt={category.name}
                        className="h-14 w-14 mx-auto"
                      />
                    </div>
                    <div className="text-gray-700">{category.name}</div>
                  </div>
                ))}
            </div>

            {/* Services Section for Mobile Views */}
            <div className="grid grid-cols-3 md:hidden gap-4 justify-items-center mt-1 mb-12">
              {categories
                .map((category) => (
                  <div key={category.id} className="text-center space-y-2">
                    <div className="p-4 rounded-full">
                      <img
                        src={category.iconUrl}
                        alt={category.name}
                        className="h-10 w-10 mx-auto"
                      />
                    </div>
                    <div className="text-gray-700 text-sm">{category.name}</div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Statistics Section */}
        <div className="grid grid-cols-1 text-lg sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center md:py-12 py-6 bg-teal-500 text-white">
          <div className="text-center">
            <p className="text-sm md:text-lg">Over 100,000 positive</p>
            <p className="text-sm md:text-lg">client reviews</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-lg">Over 500 unique skills</p>
            <p className="text-sm md:text-lg">offered</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-lg">Task Completed: </p>
            <p className="text-sm md:text-lg">10,000 +</p>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-lg">96% customer</p>
            <p className="text-sm md:text-lg">satisfaction</p>
          </div>
        </div>
      </div>

      <RecommendedServices />
      <PopularWorkers />


      {/* Popular Services Section */}
      <PopularServices />


      <div className="flex mt-2">
        {/* Left side with image and gradient overlay */}
        <div className="w-1/2 relative" style={{ height: '50vh' }}>
          <img src="/images/questor-bg-image.png" alt="Creative Work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500"></div>
        </div>

        {/* Right side with text */}
        <div className="w-4/5 md:w-1/2 bg-teal-500 py-10 px-6 md:px-12 text-white relative flex flex-col justify-center" style={{ height: '50vh' }}>
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-right">Over 10,000+ Questers</h2>
          <p className="ml-0 md:ml-0 lg::ml-52 text-base md:text-lg leading-6 md:leading-8 mb-6 text-right">
            Unlock endless possibilities by posting your job on our platform! Whether
            you are seeking a creative genius, a tech-savvy guru, or a strategic consultant,
            our network of talented freelancers is ready to bring your vision to life.
          </p>
          <div className="text-right">
            <button className="bg-white text-teal-500 font-bold py-3 px-4 rounded-lg">
              Become a quester
            </button>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}