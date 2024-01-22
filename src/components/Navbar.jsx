"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';
import LoginModal from "@/components/login/LoginModal";
import { UserDetails } from "@/data/UserDetails";

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState(new UserDetails);
    const [modalOpen, setModalOpen] = useState(false);


    const handleModalOpen = () => {
        return setModalOpen(!modalOpen);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserDetails();
    };
 
    return (
        <div className="bg-primaryBlue text-white-800 py-2 flex items-center">
            <nav className="container mx-auto flex flex-row justify-between items-center">
                <div>
                    <Image src="/dummyLogo.avif" width={70} height={70} className="rounded-full" alt=''/>
                </div>
                <div style={{ textWrap: "balance" }} className="text-xl font-medium text-center">
                    Ganga Flood Early Warning System & Inundation Forecast
                </div>


                { <div className="text-sm flex items-center">
                    {isLoggedIn ? (
                        <>
                            <p className="mr-2">{`Welcome, ${userDetails.userName}!`}</p>
                        </>
                    ) : (<></>) }
                </div> }

                <ul className="navbar-nav align-items-right">
                    {
                        isLoggedIn ? (<li className="nav-item ml-5">
                        <a className="hover:text-white-800/80 transition-all duration-200" onClick={handleLogout}>
                        Logout
                        </a>
                    </li>) : (<li className="nav-item ml-5">
                        <a className="hover:text-white-800/80 transition-all duration-200" onClick={handleModalOpen}>
                            Login
                        </a>
                    </li>)
                    }
                    
                    <li className="nav-item ml-5">
                        <a href="/contact-us" className="hover:text-white-800/80 transition-all duration-200">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
            { <LoginModal
           modalOpen={modalOpen}
           handleModalOpen={handleModalOpen}
           setuserData={setUserDetails}
           setLoggedIn={setIsLoggedIn}
            /> }
            </div>
        )
};
 
export default Navbar;