import { useRouter } from 'next/router';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import '../styles/globals.css';

export default function ForgotPassword() {
    const router = useRouter();

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <div className="flex flex-1 items-center justify-center bg-none md:bg-gray-100 m-4 md:m-0 pt-4 md:pt-24 md:pb-24">

                    <div className="py-10 px-12 bg-white rounded-xl mx-auto" style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)", maxWidth: "700px" }}>
                        <div className="flex items-center mb-8">
                            <button onClick={() => router.back()} className="text-black text-lg">
                                &lt;
                            </button>
                            <h2 className="text-xl font-bold text-gray-700 pl-4">Forgot Password</h2>

                        </div>
                        <div>  <p className='text-black text-lg text-center pb-8'>Enter your OTP</p></div>

                        <div className="flex justify-between mb-12">
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        border: "1px solid #173735",
                                        borderRadius: "5px",
                                        margin: "0 4px",
                                    }}
                                    className="text-center text-black focus:ring-teal-500 focus:border-teal-500"
                                />
                            ))}
                        </div>

                        {/* New Password Input */}
                        <div className="flex flex-col mb-6">
                            <label htmlFor="new-password" className="mb-2 text-sm text-gray-600">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                className="p-2 text-black border focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="flex flex-col mb-6">
                            <label htmlFor="confirm-password" className="mb-2 text-sm text-gray-600">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="p-2 border text-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
                            />
                        </div>

                        {/* Confirm Button */}
                        <button
                            className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
