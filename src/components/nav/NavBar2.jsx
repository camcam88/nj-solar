import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Menu from './Menu'

import { Link } from 'gatsby';

function NavBar() {
    return (
        <div 
        className='
            flex 
            w-screen
            h-24
            justify-between 
            items-center
            text-base
            border-b
            border-b-slate-900
            px-4'>
            <Link to='../'>
            <StaticImage 
                src='../../images/NJSolarDeals.svg'
                height={95}
                width={135}
                />
            </Link>
            <Menu/>
        </div>
    );
}

export default NavBar;