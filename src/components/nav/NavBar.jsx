import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Menu from './Menu'
import './nav.css'

import { Link } from 'gatsby';

function NavBar() {
    return (
        <div className='
            flex 
            w-screen
            h-22
            justify-between 
            items-center
            text-base
            border-b
            border-b-slate-900
            px-4
            my-3
            pb-4
            '>
            <Link to='../'>
                    <StaticImage 
                        src='../../images/NJSolarDeals.png'
                        className='logoIcon'
            /></Link>
            <Menu/>
        </div>
    );
}

export default NavBar;