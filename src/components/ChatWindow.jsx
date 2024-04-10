// components/ChatWindow.js
import ServiceOffer from './serviceOffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ChatWindow() {
    return (
        <div className="flex-grow p-4">
            <div className="flex justify-between items-center p-2 border-b border-gray-300">
                {/* User profile and name */}
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-2" src="/path-to-profile.jpg" alt="Profile" />
                    <h2 className="font-semibold">Leo</h2>
                </div>
                {/* Icons */}
                <div className="flex items-center">
                    <FontAwesomeIcon icon="search" className="mx-2" />
                    <FontAwesomeIcon icon="phone" className="mx-2" />
                    <FontAwesomeIcon icon="ellipsis-v" className="mx-2" />
                </div>
            </div>
            <div className="mt-4">
                {/* Chat messages */}
            </div>
            <ServiceOffer />
            {/* Input for sending messages */}
            <div className="flex items-center p-2">
                <input className="flex-grow p-2 border rounded" placeholder="Type a message..." />
                <FontAwesomeIcon icon="paperclip" className="mx-2" />
                <button className="p-2 bg-teal-500 text-white rounded">Send</button>
            </div>
        </div>
    );
}
