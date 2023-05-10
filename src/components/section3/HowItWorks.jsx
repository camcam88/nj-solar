import React, { useState, useEffect } from 'react';
import SectionTitle from '../utils/SectionTitle'
import GetStartedBtn from '../utils/GetStartedButton'
import InforCard from './InfoCard'
import useScroll from '../../hooks/useScroll'

export default function HowItWorks(){
    let scrollTop = useScroll(730)


    return(
        <div className={`flex flex-col text-center justify-center items-center ${scrollTop? 'fadeIn' : 'invisible'}`}>
            <SectionTitle text="How It Works"/>
            <div className={`flex flex-col my-24 lg:flex-row`}>
                <InforCard number="1" text="Fill out a 30 second survey and we'll customize a design to maximize energy output."/>
                <InforCard number="2" text="Receive one transparent quote with the lowest price."/>
                <InforCard number="3" text="We'll handle everything from design, permitting, site survey, and installation."/>
            </div>
            <GetStartedBtn/>
        </div>
    )
}