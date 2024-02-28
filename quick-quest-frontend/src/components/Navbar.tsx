// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 shadow-md ">
            <div className="text-3xl font-bold text-teal-500">
                QuickQuest
            </div>
            <div className="space-x-10">
                <Link href="/">
                    <span className="text-black hover:text-teal-500 text-base transition duration-500">Home</span>
                </Link>
                <Link href="/post-job">
                    <span className="text-black hover:text-teal-500 text-base transition duration-500">Post a job</span>
                </Link>
                <Link href="/login">
                    <span className="text-black hover:text-teal-500 text-base transition duration-500">Login</span>
                </Link>
                <Link href="/signup">
                    <span className="text-black hover:text-teal-500 text-base transition duration-500">Sign-up</span>
                </Link>
                <button className="bg-teal-500 text-white px-6 py-1 text-base rounded-2xl">
                    Join Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
