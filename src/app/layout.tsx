"use client";
import React from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoggedNavbar from "@/components/loggedNavbar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Oval } from 'react-loader-spinner';
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthenticatedNavbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

const AuthenticatedNavbar = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
     <Loader/>
    );
  }

  return user ? <LoggedNavbar /> : <Navbar />;
};