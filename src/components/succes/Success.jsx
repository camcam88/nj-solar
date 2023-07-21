import React from 'react';

import './success.css'

export default function Success({system, priceEst, installCost, batteryCost, panelCount, roofType}) {
    return (
        <div className='succesDiv'>
        <h1>Success!</h1>
        <p>Thank you for your submission</p>
        <h2>Summary</h2>
        <h3>System: {system}</h3>
        <h3>Panel Count: {panelCount}</h3>
        <h3>Install Location: {roofType}</h3>
        <h3>System Price: ${Math.trunc(priceEst).toLocaleString("en-US")}</h3>
        <h3>Install Price: ${Math.trunc(installCost).toLocaleString("en-US")}</h3>
        <h3>Battery Price: ${Math.trunc(batteryCost).toLocaleString("en-US")}</h3>
        <p>One of our representatives will be in contact with you shortly.</p>
        {/* <h2>Next Steps</h2> */}
        </div>
    );
    }
    