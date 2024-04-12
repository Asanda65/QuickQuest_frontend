import Link from 'next/link';
import { MdOutlineTimer, MdOutlineLocalOffer } from "react-icons/md";

export default function ServiceOffer() {
    return (
        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md my-4" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '10px', background: '#FFF' }}>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <div className="icon text-white rounded-full p-2 mr-2">
                        <img src="/images/hair-makeup-icon.png" className="w-5 h-5"></img>
                    </div>
                    <h3 className="font-semibold text-teal-500">Bridal Makeup</h3>
                </div>
                <span className="text-teal-500 font-semibold text-lg">$50</span>
            </div>
            <p className="text-teal-900 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <MdOutlineTimer className="text-teal-500" size="1.5em" />
                    <span className="ml-2 text-teal-500">3 day delivery</span>
                </div>
                <div className="flex items-center">
                    <MdOutlineLocalOffer className="text-teal-500" size="1.5em" />
                    <span className="ml-2 text-teal-900 font-medium">Offer expires in 2 days</span>
                </div>
            </div>
            <div className="text-right">
                <Link href="/serviceAcceptOffer">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">
                        Accept Offer
                    </button>
                </Link>
            </div>
        </div>
    );
}
