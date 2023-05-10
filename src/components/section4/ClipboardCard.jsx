import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import useCounter from '../../hooks/useCounter'


export default function ClipboardCard(){
    
    let num1 = 154038
    let num2 = num1 - 7000

    let number = useCounter(num1, num2)


    return(
        <div className='flex flex-col'>
            <StaticImage src='../../images/clipBoard.png' alt='Clipboard Icon'/>
            <h3 className='-mt-8  text-4xl font-bold' >{number}</h3>
            <h4 className='mb-20 text-black text-xl font-light'>projects completed</h4>
        </div>
    )
}