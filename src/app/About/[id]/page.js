import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This is a id component</h1>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default page;