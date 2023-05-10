import React from 'react';
import { Link } from "gatsby"

function GSButton() {

    return (
        <>
        <Link 
            to='/start'
            className='
            text-lg 
            text-white
            font-semibold
            uppercase 
            align-middle
            bg-[#5289C9] 
            w-40 
            h-12 
            text-center 
            py-3 
            rounded'
            >Get Started</Link>
        </>
    );
}

export default GSButton;