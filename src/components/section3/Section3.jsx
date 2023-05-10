import React, { useState, useEffect } from 'react';


import HowItWorks from './HowItWorks'

function Section3(){


    return(
        <div className={`
            flex
            flex-row
            items-center
            justify-center
            text-center
            w-screen
            px-28
            pb-20
            border-b
            border-b-slate-900
            bg-[#d3d3d3]
            `}>

            <HowItWorks/>
        </div>
    )
}

export default Section3;