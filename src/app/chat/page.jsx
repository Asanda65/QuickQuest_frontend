"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ChatSidebar from '../../components/ChatSidebar';
import ChatWindow from '../../components/ChatWindow';
import '../globals.css';
import axios from 'axios';
import AuthRoute from '../(auth)/AuthRoute';

export default function ChatPage() {
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState(null);


    useEffect(() => {
        const fetchChats = async () => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/chats`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            });
            setChats(response.data.chats);
            setActiveChat(response.data.chats[0]);
          } catch (error) {
            console.error('Error fetching chats:', error);
          }
        };
      
        fetchChats();
      }, []);



    return (
        <>
        <AuthRoute>
            <Head>
                <title>Chat Interface</title>
            </Head>
            <div className='flex flex-col h-screen'>
                <div className="flex h-screen  my-10 overflow-hidden align-center justify-center">
                    {/* Pass setActiveChat to ChatSidebar to update the activeChat when a chat is selected */}
                    <ChatSidebar chats={chats} onSelectChat={setActiveChat} />
                    {/* Pass the activeChat to ChatWindow to display the corresponding conversation */}
                    <div className='mb-4'><ChatWindow activeChat={activeChat} /></div>
                </div>
            </div>
            </AuthRoute>

        </>
    );
}
