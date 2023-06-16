import Sidebar from '@/components/side/Sidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <section className='flex'>
            <Sidebar />
            <div className="w-full">
                {children}
            </div>
        </section>
    );
};

export default layout;