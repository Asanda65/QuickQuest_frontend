import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import '../styles/globals.css';


export default function SignUp() {
    const router = useRouter();

    return (
        <>
            <div className='flex flex-col h-screen md:min-h-screen'>
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
                    <h1 className="text-lg font-meduim text-black">Get Started</h1>
                    <p className="text-center text-base my-2 mb-4" style={{ color: "#02615D" }}>Welcome to QuickQuest - let’s create your account</p>
                    <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full overflow-hidden">
                        {/* Hidden file input */}
                        <input type="file" id="imageUpload" className="hidden" />
                        {/* Label wraps the profile picture and the overlay */}
                        <label htmlFor="imageUpload" className="cursor-pointer w-full h-full rounded-full">
                            {/* Profile picture */}
                            <img src="/images/profile-icon.png" alt="Profile" className="w-full h-full rounded-full" />
                            {/* Overlay */}
                            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faCamera} className="text-white w-6 h-6" />
                                <span className="text-white text-xs">Add image</span>
                            </div>
                        </label>
                    </div>


                    <div className="w-full max-w-lg">
                        <div className="flex gap-4 mb-1">
                            <div className="w-1/2">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" id="first-name" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" id="last-name" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                            </div>
                        </div>

                        <div className="flex flex-col mb-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                        </div>

                        <div className="flex flex-col mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                            <input type="password" id="password" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                        </div>

                        <div className="flex flex-col mb-1">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm-password" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="Enter Location or Locate me"
                                    className="block w-full border border-green-800 pl-3 pr-12 py-1 rounded-md shadow-sm"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center bg-teal-500 rounded-r-md">
                                    <FontAwesomeIcon icon={faCrosshairs} className="w-5 h-5 text-white mx-3" />
                                </div>
                            </div>


                        </div>

                        <hr className="border-gray-300 my-4" />

                        <p className="text-center text-sm text-gray-600 mb-4">
                            By clicking Create Account, you agree to the Terms of Use and Privacy Policy.
                        </p>

                        <button className="w-full bg-teal-500 text-sm text-white rounded-md py-2 mb-2 hover:bg-teal-600">
                            Create Account
                        </button>

                        <p className="text-center text-sm text-black">
                            Already have an account?{' '}
                            <Link href="/login">
                                <span className="text-teal-600 hover:text-teal-500">Log in.</span>
                            </Link>
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
