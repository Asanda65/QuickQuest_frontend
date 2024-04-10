// pages/chat.js
import Head from 'next/head';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';


export default function ChatPage() {
    return (
        <>
            <Head>
                <title>Chat Interface</title>
            </Head>
            <Navbar />
            <div className="flex h-screen bg-gray-100">
                <ChatSidebar />
                <ChatWindow />
            </div>
            <Footer />
        </>
    );
}
