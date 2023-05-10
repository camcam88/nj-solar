import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import useCounter from '../../hooks/useCounter'

export default function ClockCard(){
    let num1 = 2284931
    let num2 = num1 - 5000

    let number = useCounter(num1, num2)

    return(
        <div className='flex flex-col'>
            <StaticImage src='../../images/clock.png' alt='Analog Clock Icon'/>
            <h3 className='-mt-8 text-4xl font-bold' >{number}</h3>
            <h4 className='mb-20 text-black text-xl font-light'>hours worked</h4>
        </div>
    )
}