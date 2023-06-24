import React from 'react';

import './payment.css'

export default function Payment({postPrice}){
    return(
        <div className='payment flex flex-col'>
            <div className='payOption mb-6'>
                <h3 className='mb-4 text-3xl text-emerald-600'>Cash</h3>
                <p className='font-semibold'>${postPrice}</p>
                <p className='text-sm'>Pre-incentive: $27.756.00</p>
            </div>
            <div className='payOption'>
                <h3 className='mb-4 text-3xl text-[#5289C9]'>Finance</h3>
                <p className='font-semibold'>$204.49 /month</p>
                <p className='text-sm'>Pre-incentive: $292.13 /month</p>
            </div>
        </div>
    )
}

