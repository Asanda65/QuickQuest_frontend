'use client';
import Navbar from "../components/Navbar";
import RecommendedServices from "../components/RecommendedServices";
import PopularWorkers from "../components/popularWorkers";
import PopularServices from "../components/poplarServices";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
import '../styles/globals.css';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router'



export default function Home() {


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

        {/* Services Section */}
        <div className="hidden sm:hidden md:grid md:grid-cols-5 gap-4 justify-items-center mt-1 md:mt-12 mb-12">

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/cleaning-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Cleaning</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/cleaning-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Gardening</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/baby-sitting-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Baby-Sitting</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/hair-makeup-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">hair & Makeup</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/tech-support-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Tech Support</div>
          </div>

        </div>

        <div className="hidden sm:hidden md:grid md:grid-cols-5 gap-4 justify-items-center mb-24">

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/plumbing-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Plumbing</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/Catering-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Catering</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/Tutoring-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Tutoring</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/event-planing-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Event Planning</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/construction-icon.png" alt="Cleaning" className="h-14 w-14 mx-auto" />
            </div>
            <div className="text-gray-700">Construction</div>
          </div>

        </div>


        {/* Services Section for Mobile Views */}
        <div className="grid grid-cols-3 md:hidden gap-4 justify-items-center mt-1 mb-12">
          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/cleaning-icon.png" alt="Cleaning" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Cleaning</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/gardening-service-icon.png" alt="Gardening" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Gardening</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/baby-sitting-icon.png" alt="Baby-Sitting" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Baby-Sitting</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/hair-makeup-icon.png" alt="Hair & Makeup" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Hair & Makeup</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/tech-support-icon.png" alt="Tech Support" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Tech Support</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/plumbing-icon.png" alt="Plumbing" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Plumbing</div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:hidden gap-4 justify-items-center mb-4">
          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/Catering-icon.png" alt="Catering" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Catering</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/Tutoring-icon.png" alt="Tutoring" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Tutoring</div>
          </div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/event-planing-icon.png" alt="Event Planning" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Event Planning</div>
          </div>

          {/* Empty div to push the Construction to the next row */}
          <div></div>

          <div className="text-center space-y-2">
            <div className="p-4 rounded-full">
              <img src="/images/construction-icon.png" alt="Construction" className="h-10 w-10 mx-auto" />
            </div>
            <div className="text-gray-700 text-sm">Construction</div>
          </div>

          {/* These divs are empty to ensure correct grid alignment */}
          <div></div>
          <div></div>
        </div>


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
