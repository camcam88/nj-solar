import React, { useState } from 'react';

import './payment.css'

export default function Payment({postPrice, prePrice, onPayButtonClick}){

    const [choice, setChoice] = useState('')
    const preFinance = (prePrice * 0.009158 * (1+ 0.009158)**240)/ ((1+ 0.009158)**240 - 1)
    const postFinance = (postPrice * 0.009158 * (1+ 0.009158)**240)/ ((1+ 0.009158)**240 - 1)
    
    console.log('preFinance', preFinance)
    console.log('prePrice', prePrice)
    console.log('postFinance', postFinance)
    console.log('postPrice', postPrice)

    const handleClick = (e) => {
        
        // if the id of the traget is cash, set the choice to cash
        // if the id of the target is finance, set the choice to finance
        // if the parent element of the target has an id of cash, set the choice to cash
        // if the parent element of the target has an id of finance, set the choice to finance

        const target = e.target.id;
        const parent = e.target.parentElement.id;

        if(target === 'cash' || parent === 'cash') setChoice('cash');   
        if(target === 'finance' || parent === 'finance') setChoice('finance');

        onPayButtonClick(choice);
        // if window is not undefined, scroll to next component
        if(typeof window !== 'undefined'){
            window.scrollTo({
                top: 2900,
                behavior: 'smooth'
            })
        }


        // if they choose finance, then I need to take the total pre incentive cost, - the federal tax credit, 
    }


    return(
        <div className='payment flex flex-col'>
            <button id='cash' type='button' className={choice === 'cash'? 'payChoice mb-6': 'payOption mb-6'} onClick={handleClick}>
                <h3 className='mb-4 text-3xl text-emerald-600'>Cash</h3>
                <p className='font-semibold'>{"$" + Math.trunc(postPrice).toLocaleString("en-US") + ".00"}</p>
                <p className='text-sm'>Pre-incentive: {"$" + Math.trunc(prePrice).toLocaleString("en-US") + ".00"}</p>
            </button>
            <button id='finance' type='button' className={choice === 'finance'? 'payChoice mb-6': 'payOption mb-6'} onClick={handleClick}>
                <h3 className='mb-4 text-3xl text-[#5289C9]'>Finance</h3>
                <p className='font-semibold'>{"$" + Math.trunc(postFinance).toLocaleString("en-US") + ".00"} /month</p>
                <p className='text-sm'>Pre-incentive: {"$" + Math.trunc(preFinance).toLocaleString("en-US") + ".00"} /month</p>
            </button>
        </div>
    )
}

