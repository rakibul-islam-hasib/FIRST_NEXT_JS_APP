import Link from 'next/link';
import React from 'react';

const NavLink = ({ to, activeClass , children , ...params }) => {


    return <Link href={to} {...params}>{children}</Link>
};

export default NavLink;