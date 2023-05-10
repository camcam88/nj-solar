import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import useCounter from '../../hooks/useCounter'

export default function BatteryCard(){

    let num1 = 1093488231
    let num2 = num1 - 10000

    let number = useCounter(num1, num2)

    return(
        <div className='flex flex-col'>
            <StaticImage src='../../images/battery.png' alt="battery icon"/>
        <h3 className='-mt-8  text-4xl font-bold' >{number}</h3>
            <h4 className='mb-20 text-black text-xl font-light'>watts installed</h4>
        </div>
    )
}