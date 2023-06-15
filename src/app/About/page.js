import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>This is about component </h1>
            <Link className='font-bold text-red-400' href='/'>Home</Link>
        </div>
    );
};

export default AboutPage;