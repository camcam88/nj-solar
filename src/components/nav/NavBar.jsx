import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import LinkList from './LinkList'
import GetStartedBtn from '../utils/GetStartedButton'
import { Link } from 'gatsby';

function NavBar() {
    return (
        <div className='
            flex 
            w-screen
            h-24
            justify-between 
            items-center
            text-base
            border-b
            border-b-slate-900
            px-4
            my-3
            pb-4'>
            <Link to='../'>
                    <StaticImage 
                        src='../../images/NJSolarDeals.svg'
                        height={75}
                        width={100}
                        /></Link>

                    <LinkList/>
                    <GetStartedBtn/>
        </div>
    );
}

export default NavBar;