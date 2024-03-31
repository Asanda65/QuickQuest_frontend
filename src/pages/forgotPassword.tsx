import { useRouter } from 'next/router';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import '../styles/globals.css';

export default function ForgotPassword() {
    const router = useRouter();

    return (
        <>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className="flex items-center justify-center bg-none md:bg-gray-100 m-4 md:m-0 pt-4 md:pt-24 md:pb-24">
                    {/* Apply the specific box shadow to this div */}
                    <div className="p-6 bg-white rounded-xl mx-auto max-w-sm" style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <div className="flex items-center mb-4">
                            <button onClick={() => router.back()} className="text-black text-lg">
                                &lt;
                            </button>
                            <h2 className="text-xl font-bold text-gray-700 pl-4">Forgot Password</h2>
                        </div>
                        <p className="mb-4 text-sm text-gray-600">
                            Enter your email address and we’ll send you a link to reset your password
                        </p>
                        <div className="mb-4 flex justify-center">
                            <img
                                src="/images/forgotPassword-icon.png"
                                alt="Forgot Password"
                                className="max-w-xs"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 mt-1 mb-2 border focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
                                placeholder="Enter your email"
                            />
                            <button
                                className="mt-2 px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            >
                                <a href="/forgotPasswordVerification"> Send OTP</a>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
