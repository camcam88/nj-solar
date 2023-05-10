import React from 'react';
import ClockCard from './ClockCard'
import BatteryCard from './BatteryCard'
import ClipBoardCard from './ClipboardCard'

export default function ResultsRow(){
    return(
        <div className='flex flex-col md:flex-row mt-20'>
            <ClockCard/>
            <ClipBoardCard/>
            <BatteryCard/>
        </div>
    )
}