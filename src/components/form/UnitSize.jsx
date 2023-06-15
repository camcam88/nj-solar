import React from 'react';
import { useState } from 'react';

import { Field } from 'formik';
import {useSetUsage} from '../../Context/ppwContext'

import Swiper from './Swiper'
import RoofChoice from './RoofChoice';

// q: how to pass the value of the annual usage to the next form?
// a: use the useSetUsage hook to set the value in the context

function UnitSize({onSetUntitSizeSet}){
    const [energyBill, setEnergyBill] = useState(0);
    const [loading, setLoading] = useState(false);

    const setannualUsage = useSetUsage()

    const handleChange = (e)=>{
        let number = e.target.value;
        setEnergyBill(number)
    };

    const handleClick = ()=>{
        setannualUsage(energyBill)
        const set = true
        onSetUntitSizeSet(set)
    }

    return(
        <>
        <label 
            className='label max-w-5xl mt-6 pl-1.5' 
            htmlFor="exposure">Sun Exposure</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >How much sun exposure does your house have?</p>
        <Swiper/>
        <label 
            className='label max-w-5xl mt-12 pl-1.5' 
            htmlFor="unitSize">Energy Bill</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >What is you average monthly energy bill?</p>
        <Field 
            className='Field max-w-5xl mt-4 mb-8' 
            id="energyBill" 
            name="energyBill" 
            type='price' 
            placeholder="$0" 
            onChange={handleChange} 
            disabled={onSetUntitSizeSet} />
        <label 
            className='label max-w-5xl mt-12 pl-1.5' 
            htmlFor="unitSize">Roof Type?</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >Which of the following matches where you want you pannels installed?</p>
        <RoofChoice/>
        <button className='Field submit mt-6 max-w-5xl' type="button" onClick={handleClick} disabled={loading}>Continue</button>
        </>
    )
}

export default UnitSize;