import React from 'react';

import SectionTitle from '../utils/SectionTitle'
import GetStartedBtn from '../utils/GetStartedButton'
import ResultsRow from './ResultsRow';

import useScroll from '../../hooks/useScroll'

function Section4(){
    let sroll = 1232
    let scrollTop = useScroll(1232)
    
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
            <SectionTitle text='Our Results'/>

            {scrollTop? <ResultsRow/> : ''}

            <GetStartedBtn/>
        </div>
    )
}

export default Section4;