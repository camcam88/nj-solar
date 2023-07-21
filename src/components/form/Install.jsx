import React from 'react';
import { useState } from 'react';
import { useSetInstallPrice, useSetBatteryPrice } from '../../Context/ppwContext';

import './install.css'

import installIMg from '../../images/install.png'
import batteryImg from '../../images/battery.png'
import greenCheckMark from '../../images/greenCheckMark.png'
import AddOn from './AddOn'

export default function Install(props){
    
    const setIPrice = useSetInstallPrice();
    const setBPrice = useSetBatteryPrice();
    const [install, setInstall] = useState(true)
    const [battery, setBattery] = useState(false)

    const handleInstallClick = (e) => {
        e.preventDefault()
        setIPrice(!install)
        setInstall(!install)
        console.log("install",install)
        // if window is not undefined, scroll to next component
        if(typeof window !== 'undefined'){
            window.scrollTo({
                top: 1600,
                behavior: 'smooth'
            })
        }
    }
    const handleBatteryClick = (e) => {
        e.preventDefault()
        setBPrice(!battery)
        setBattery(!battery)

        // if window is not undefined, scroll to next component
        if(typeof window !== 'undefined'){
            window.scrollTo({
                top: 2150,
                behavior: 'smooth'
            })
        }
    }

    return(
        <div className="install">
            <div className="addOn-container">
                <AddOn
                    title='Full Installation' 
                    text="We've established relationships with top rated installers in your area to offer full install workmanshio warranty and a low fat install rate. Disable if you want a DIY option" 
                    preCost="7,560.00" 
                    postCost="5,292.00"
                    imageSrc={installIMg} 
                    alt='installer icon'
                    clickFunction={handleInstallClick}
                    imgClass={install? 'greenCheck': 'hidden'}
                    />
                <AddOn 
                    title='Emphases IQ Battery' 
                    text="The Enphase IQ Battery system can combine as many as 3 IQ
                    Battery 10s together, providing 30.24 kWh of storage." 
                    preCost="16,000.00" 
                    postCost="11,200.00" 
                    imageSrc={batteryImg} 
                    alt='installer icon' 
                    clickFunction={handleBatteryClick}
                    imgClass={battery? 'greenCheck': 'hidden'}
                    />
            </div>
        </div>
    )
}

{/* <StaticImage className='addOnImage' src="../../images/install.png" alt="yellow house"/>
<div className="addOnText-container">
<h3 className='addOnTitle'>Full  Installation</h3>
<p className='addOntext'>We've established relationships with top rated installers in your area to offer full install workmanshio warranty and a low fat install rate. Disable if you want a DIY option</p>
<p className='postCost'>+ $5,292.00</p>
<p className='preCost'>Pre-incentive: $7,560.00</p> */}