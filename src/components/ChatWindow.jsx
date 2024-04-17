import React, { useEffect, useState } from 'react';
import ServiceOffer from './serviceOffer';
import { FaSearch } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import axios from 'axios';

export default function ChatWindow({ activeChat }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchMessages = async (chatId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.quick-quest.dfanso.dev/v1/chats/${chatId}/messages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
    setIsLoading(false);
  };

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        await axios.post(`https://api.quick-quest.dfanso.dev/v1/chats/${activeChat._id}/messages`, {
          content: newMessage,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setNewMessage('');
        fetchMessages(activeChat._id);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    if (activeChat) {
      fetchMessages(activeChat._id);
    }
  }, [activeChat]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex m-2 flex-col h-full w-full p-4" style={{ boxShadow: '0px 0px 4px 2px rgba(79, 184, 179, 0.25)', borderRadius: '10px' }}>
      {/* Chat header */}
      {activeChat && (
        <div className="flex justify-between items-center p-2 border-b border-gray-300">
          {/* User profile and name */}
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src={activeChat.worker.profileImage} alt={`${activeChat.worker.firstName} ${activeChat.worker.lastName}`} />
            <h2 className="font-semibold text-teal-900">{activeChat.worker.firstName} {activeChat.worker.lastName}</h2>
          </div>
          {/* Icons */}
          <div className="flex items-center">
            <FaSearch className="text-gray-700 mx-2" />
            <IoCallOutline className="text-gray-700 mx-2 text-xl" />
            <BsThreeDotsVertical className="text-gray-700 mx-2" />
          </div>
        </div>
      )}

      {/* Chat messages */}
      <div className="flex-grow overflow-auto p-2">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex items-end ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-2/3 p-2 my-1 rounded-lg ${message.sender === 'customer' ? 'bg-teal-600' : 'bg-teal-400'}`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-300 text-right">{new Date(message.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <ServiceOffer />

      {/* Input for sending messages */}
      <div className="flex items-center p-2">
        <input
          className="flex-grow p-2 border rounded"
          placeholder="Type a message..."
          style={{ background: '#CAE9E8', borderRadius: '10px' }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <CiFaceSmile className="text-teal-500 text-3xl mx-1" />
        <IoIosAttach className="text-teal-500 text-3xl mx-1" />
        <div className="flex items-center justify-center">
          <button
            className="flex items-center justify-center w-9 h-9 bg-teal-500 text-white rounded-full"
            onClick={sendMessage}
          >
            <LuSend className="text-white text-xl m-[-2px]" />
          </button>
        </div>
      </div>
    </div>
  );
}