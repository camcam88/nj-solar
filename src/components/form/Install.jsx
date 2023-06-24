import React from 'react';

import './install.css'
import install from '../../images/install.png'
import battery from '../../images/eBattery.png'

import AddOn from './AddOn'

export default function Install(props){

    return(
        <div className="install">
            <div className="addOn-container">
                <AddOn 
                    title='Full  Installation' 
                    text="We've established relationships with top rated installers in your area to offer full install workmanshio warranty and a low fat install rate. Disable if you want a DIY option" 
                    preCost="7,560.00" 
                    postCost="5,292.00" 
                    imageSrc={install} 
                    alt='installer icon' />
                <AddOn 
                    title='Emphases IQ Battery' 
                    text="The Enphase IQ Battery system can combine as many as 3 IQ
                    Battery 10s together, providing 30.24 kWh of storage." 
                    preCost="16,000.00" 
                    postCost="11,200.00" 
                    imageSrc={battery} 
                    alt='installer icon' />
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