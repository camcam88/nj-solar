import React, { useState, useEffect } from 'react';

import SectionTitle from '../utils/SectionTitle'
import SectionText from '../utils/SectionText'
import GetStartedBtn from '../utils/GetStartedButton'
import { StaticImage } from "gatsby-plugin-image"

import useScroll from '../../hooks/useScroll'

function Section2(){
    
    let scrollTop = useScroll(250)

    return(
        <div 
        className={`
            flex
            flex-col
            items-center
            text-center
            w-screen
            sm:px-0
            lg:px-40 
            pb-20 
            ${scrollTop? 'fadeIn' : 'invisible'}`}>
            <SectionTitle text='Lowest Price In Solar'/>
            <StaticImage alt='NJ Solar Logo' src='../../images/NJSolarDeals.svg' className='w-1/4 mx-auto mt-20'/>
            <SectionText text='Our software allows us to cut out the salespeople and pass the savings directly to you. Our quotes are on average 50% lower than traditional solar companies.'/>
            <GetStartedBtn/>
        </div>
    )
}

export default Section2;