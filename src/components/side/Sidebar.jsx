import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className='mr-4 font-bold mt-8 ml-3'>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link href='/dashboard/manage-next'>Manage NEXT</Link>
                </li>
                <li>
                    <Link href='/dashboard/manage-post'>Manage Post</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;