import React, { useState } from 'react';

import './payment.css'

export default function Payment({postPrice, onPayButtonClick}){

    const [choice, setChoice] = useState('')

    const handleClick = (e) => {
        
        // if the id of the traget is cash, set the choice to cash
        // if the id of the target is finance, set the choice to finance
        // if the parent element of the target has an id of cash, set the choice to cash
        // if the parent element of the target has an id of finance, set the choice to finance

        const target = e.target.id;
        const parent = e.target.parentElement.id;

        if(target === 'cash' || parent === 'cash') setChoice('cash');   
        if(target === 'finance' || parent === 'finance') setChoice('finance');

        console.log('choice',choice)

        onPayButtonClick(choice);
    }


    return(
        <div className='payment flex flex-col'>
            <button id='cash' type='button' className={choice === 'cash'? 'payChoice mb-6': 'payOption mb-6'} onClick={handleClick}>
                <h3 className='mb-4 text-3xl text-emerald-600'>Cash</h3>
                <p className='font-semibold'>{"$" + Math.trunc(postPrice).toLocaleString("en-US") + ".00"}</p>
                <p className='text-sm'>Pre-incentive: $27.756.00</p>
            </button>
            <button id='finance' type='button' className={choice === 'finance'? 'payChoice mb-6': 'payOption mb-6'} onClick={handleClick}>
                <h3 className='mb-4 text-3xl text-[#5289C9]'>Finance</h3>
                <p className='font-semibold'>{"$" + Math.trunc(postPrice/300).toLocaleString("en-US") + ".00"} /month</p>
                <p className='text-sm'>Pre-incentive: $292.13 /month</p>
            </button>
        </div>
    )
}

