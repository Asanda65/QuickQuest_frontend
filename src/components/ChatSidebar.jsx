// components/ChatSidebar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ChatSidebar() {
    return (
        <div className="w-1/4 p-4 bg-white shadow-xl" style={{ boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)' }}>
            <div className="flex items-center p-2 bg-gray-200 rounded">
                <input className="flex-grow p-2 rounded" placeholder="Search" />
                <FontAwesomeIcon icon="search" />
            </div>
            {/* List of chats */}
            <div className="mt-4">
                {/* Iterate over chats here */}
                <div className="p-2 hover:bg-gray-200 cursor-pointer border-l-4 border-transparent border-l-main">
                    {/* Active chat gets 'border-l-main' */}
                    <p>Leo</p>
                    <p className="text-sm text-gray-600">Last message...</p>
                </div>
                {/* Other chat entries */}
            </div>
        </div>
    );
}
