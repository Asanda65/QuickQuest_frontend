import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ServiceOffer() {
    return (
        <div className="p-4 bg-white rounded shadow-md my-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Bridal Makeup</h3>
                <span className="text-lg font-semibold">$50</span>
            </div>
            <p className="text-gray-600 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="flex items-center">
                <FontAwesomeIcon icon="clock" className="text-gray-500" />
                <span className="ml-2">3 day delivery</span>
                <FontAwesomeIcon icon="badge-check" className="text-gray-500 ml-4" />
                <span className="ml-2">Offer expires in 2 days</span>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded-md mt-4">
                Accept Offer
            </button>
        </div>
    );
}
