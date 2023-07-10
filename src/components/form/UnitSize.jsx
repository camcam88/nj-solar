import React from 'react';
import { useState } from 'react';

import { Field } from 'formik';
import {useSetUsage, useRoofType, useExposure} from '../../Context/ppwContext'
import {useZip} from '../../Context/zipContext'

import Swiper from './Swiper';

import RoofChoice from './RoofChoice';

// q: how to pass the value of the annual usage to the next form?
// a: use the useSetUsage hook to set the value in the context

function UnitSize({onSetUntitSizeSet}){
    const [energyBill, setEnergyBill] = useState(0);
    const [error, setError] = useState(false);
    const setannualUsage = useSetUsage()
    const zip = useZip()
    const roofType = useRoofType()
    const exposure = useExposure()

    console.log("zip", zip)
    const handleChange = (e)=>{
        let number = e.target.value;
        setEnergyBill(number)
    };

    const handleClick = ()=>{
        setannualUsage(energyBill)
        const set = true
        onSetUntitSizeSet(set)
        // if window in not undifined set the scroll to the top of the page with a smooth animation
        if (typeof window !== 'undefined') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    const handleBlur = (e)=>{
        // if the value is more than 0 and window is not undifined set the scroll to the next form with a smooth animation
        if (e.target.value > 0 && typeof window !== 'undefined') {
            setError(false)
            window.scrollTo({top: 1000, behavior: 'smooth'});
        }
        // if the value is nothing or less than 0 set the error to true
        if (!e.target.value || e.target.value < 0) {
            setError(true)
        }
    };

    return(
        <>
        <label 
            className='label max-w-5xl mt-6' 
            htmlFor="exposure">Sun Exposure</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >How much sun exposure does your house have?</p>
        <Swiper/>
        <label 
            className='label max-w-5xl mt-28' 
            htmlFor="unitSize">Energy Bill</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >What is you average monthly energy bill?</p>
        <Field 
            className='Field max-w-5xl mt-4 mb-8' 
            id="energyBill" 
            name="energyBill" 
            type='number' 
            placeholder="$0" 
            onChange={handleChange} 
            onBlur={handleBlur}
            disabled={onSetUntitSizeSet} />
        <div className={error? "error" : "hidden"}>Energy Bill Required</div>
        <label 
            className='label max-w-5xl mt-28' 
            htmlFor="unitSize">Roof Type?</label>
        <p 
            className='text-left mb-6 text-slate-500 font-light' 
            >Which of the following matches where you want the panels installed?</p>
        <RoofChoice />
        <button className='Field submit mt-6 max-w-5xl' type="button" onClick={handleClick} disabled={!zip || !energyBill || !roofType || !exposure}>Continue</button>
        </>
    )
}

export default UnitSize;