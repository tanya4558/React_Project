"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';
 
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
 
    const handleLogout = () => {
        // Implement logout logic
        setIsLoggedIn(false);
        setUsername('');
    };
 
    return (
        <div className="bg-primaryBlue text-white-800 py-2 flex items-center">
            <nav className="container mx-auto flex flex-row justify-between items-center">
                <div>
                    <Image src="/dummyLogo.avif" width={70} height={70} className="rounded-full" />
                </div>
                <div style={{ textWrap: "balance" }} className="text-xl font-medium text-center">
                    Ganga Flood Early Warning System & Inundation Forecast
                </div>
                <div className="text-sm font-extralight flex items-center">
                    {isLoggedIn ? (
                        <>
                            <p className="mr-2">{`Welcome, ${username}!`}</p>
                            <button onClick={handleLogout} className="hover:text-white-800/80 transition-all duration-200">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/contact-us">
                            <div className="hover:text-white-800/80 transition-all duration-200">Contact Us</div>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};
 
export default Navbar;