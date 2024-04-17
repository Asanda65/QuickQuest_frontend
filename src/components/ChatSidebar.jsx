import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function ChatSidebar({ chats, onSelectChat }) {
  // State to keep track of the currently selected chat
  const [selectedChat, setSelectedChat] = useState(null);

  // Function to handle chat selection
  const handleSelectChat = (chat) => {
    setSelectedChat(chat._id);
    onSelectChat(chat); // Communicate the selected chat to the parent component
  };

  return (
    <div className="w-1/4 m-2 p-4 bg-white rounded-xl shadow" style={{ boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)', borderRadius: '10px' }}>
      <div className="flex items-center p-1 rounded" style={{ backgroundColor: 'rgba(79, 184, 179, 0.30)', color: '#173735' }}>
        <FaSearch className="mr-2 text-teal-900" />
        <input className="flex-grow rounded bg-transparent focus:outline-none placeholder-teal-900" placeholder="Search" />
      </div>
      {/* Scrollable List of chats */}
      <div className="mt-4 overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        {chats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => handleSelectChat(chat)}
            className={`flex items-center p-2 rounded cursor-pointer border-2 mt-2 ${
              selectedChat === chat._id ? 'border-teal-500' : 'border-transparent'
            } hover:border-teal-500`}
          >
            <img className="w-10 h-10 rounded-full mr-2" src={chat.worker.profileImage} alt={`${chat.worker.firstName} ${chat.worker.lastName}`} />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="font-semibold" style={{ color: '#173735' }}>{chat.worker.firstName} {chat.worker.lastName}</span>
                <span className="text-sm" style={{ color: '#828282' }}>{new Date(chat.updatedAt).toLocaleString()}</span>
              </div>
              {chat.messages.length > 0 && (
                <p className="text-sm text-gray-500">{chat.messages[chat.messages.length - 1].content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}