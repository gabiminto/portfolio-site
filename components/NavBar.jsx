// template navbar
import React from 'react';
import Link from 'next/link';


export default function NavBar({showName = true}) {
    return (
        <div className="absolute bottom-1 left-0 w-full z-50">
            <div className="container mx-3 ">
                {showName &&
                    <div
                        className="-my-1 text-4xl -mx-1"
                        style={{fontFamily: 'var(--font-hanken-grotesk)', fontWeight: 200}}
                    >
                        Gabi Minto
                    </div>
                }
                <div className="">
                    <Link href="/" className="nav-link">Home.</Link>
                    <span> </span>
                    <Link href="/contact" className="nav-link">Contact.</Link>
                    <span> </span>
                    <Link href="/works" className="nav-link">Works.</Link>
                    <span> </span>
                </div>
            </div>
        </div>
    );
};