import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex container mx-auto py-3 justify-between items-center'>
            <div className="title">
                <h1 className='text-4xl text-red-500'>NEXT HERO</h1>
            </div>
            <div className="">
                <ul className='flex items-center gap-5'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                    <li><Link href='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;