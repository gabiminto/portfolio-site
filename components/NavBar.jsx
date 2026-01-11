// template navbar
import React from 'react';
import Link from 'next/link';


const NavBar = () => {
    return (
        <div className="absolute bottom-1 left-0 w-full z-50">
            <div className="container mx-3 ">
                <div className="">
                    <Link href="/" className="nav-link">Home.</Link>
                    <span> </span>
                    <Link href="/about" className="nav-link">About.</Link>
                    <span> </span>
                    <Link href="/contact" className="nav-link">Contact.</Link>
                    <span> </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;