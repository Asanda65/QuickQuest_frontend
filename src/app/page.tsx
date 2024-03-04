import Navbar from "../components/Navbar";
import RecommendedServices from "../components/RecommendedServices";
import PopularWorkers from "../components/popularWorkers";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  const services = [
    {
      name: "Babysitting",
      price: "Starting at Rs.2000/hr",
      imageUrl: "/images/baby-sitting.png" // Replace with the path to your image
    },
    {
      name: "Bridal Makeup",
      price: "Starting at Rs.25000",
      imageUrl: "/images/bridal-makeup.png"
    },
    {
      name: "IELTS Tutoring",
      price: "Starting at Rs.10,000",
      imageUrl: "/images/ilets-tutor.png"
    },


  ];


  return (

    <>
      <Navbar />

      <div className="">
        <div className="flex justify-center items-center space-x-0 mt-4 py-8">
          <input
            type="text"
            placeholder="What do you want to get done?"
            className="p-2 w-1/4 border border-gray-400 rounded-l-lg"
          />
          <button className="bg-teal-500 text-white font-medium px-6 py-2 rounded-r-lg border border-gray-400">
            Find Workers
          </button>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-items-center mt-12 mb-12">

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-items-center mb-24">

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

        {/* Statistics Section */}
        <div className="grid grid-cols-1 text-lg sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center py-12 bg-teal-500 text-white">
          <div className="text-center">
            <p>Over 100,000 positive</p>
            <p>client reviews</p>
          </div>
          <div className="text-center">
            <p>Over 500 unique skills</p>
            <p>offered</p>
          </div>
          <div className="text-center">
            <p>Task Completed: </p>
            <p>10,000 +</p>
          </div>
          <div className="text-center">
            <p>96% customer</p>
            <p>satisfaction</p>
          </div>
        </div>
      </div>

      <RecommendedServices />
      <PopularWorkers />

      <div className="mx-auto mt-4 py-8 max-w-screen-2xl px-28">
        <h2 className="text-lg pl-4 font-bold mb-6 text-left text-black">Recommended Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div key={index} className="min-w-[420px] p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={service.imageUrl} alt={service.name} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-black">{service.name}</h3>
                  <p className="text-gray-500">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex mt-2">
        {/* Left side with image and gradient overlay */}
        <div className="w-1/2 relative" style={{ height: '50vh' }}>
          <img src="/images/questor-bg-image.png" alt="Creative Work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500"></div>
        </div>

        {/* Right side with text */}
        <div className="w-4/5 md:w-1/2 bg-teal-500 py-10 px-6 md:px-12 text-white relative flex flex-col justify-center" style={{ height: '50vh' }}>
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-right">Over 10,000+ Questers</h2>
          <p className="ml-0 md:ml-52 text-base md:text-lg leading-6 md:leading-8 mb-6 text-right">
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
      <Footer />
    </>



  );
}
