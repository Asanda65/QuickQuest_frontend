"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ChatSidebar from '../../components/ChatSidebar';
import ChatWindow from '../../components/ChatWindow';
import '../globals.css';

export default function ChatPage() {
    // Presuming you fetch your chat list from somewhere, this would be your default chats array.
    // It's been moved here for demonstration purposes. You might have this coming from an API or context.
    const defaultChats = [
        { id: 1, name: "Leo", lastMessage: "Last message preview...", time: "10:22" },
        // ... other chats
    ];

    // State to keep track of the currently active chat, defaulting to the first chat.
    const [activeChat, setActiveChat] = useState(defaultChats[0]);

    return (
        <>
            <Head>
                <title>Chat Interface</title>
            </Head>
            <div className='flex flex-col h-screen'>
                <div className="flex h-screen  my-10 overflow-hidden align-center justify-center">
                    {/* Pass setActiveChat to ChatSidebar to update the activeChat when a chat is selected */}
                    <ChatSidebar chats={defaultChats} onSelectChat={setActiveChat} />
                    {/* Pass the activeChat to ChatWindow to display the corresponding conversation */}
                    <div className='mb-4'><ChatWindow activeChat={activeChat} /></div>
                </div>
            </div>

        </>
    );
}
