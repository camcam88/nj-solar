import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useState } from 'react';

import {useExposureUpdate} from '../../Context/ppwContext'
export default ()=> {

    const [choice, setChoice] = useState('')
    const setExpsore = useExposureUpdate();

    const handleClick =(e)=>{
        console.log('Clicked', e.target.id)
        const target = e.target.id
        setChoice(target)
        setExpsore(target)
        
    }

    return (
        <div className='exposureRow  flex md:flex-row flex-col max-w-5xl mb-8'>
            <button onClick={handleClick} type='button' className='roofBtn w-1/3 mr-2'>
            <label className={choice == "1.3"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="Shaded">Shingles</label>
            <StaticImage id='1.3' className={choice == "1.3"? "" : 'w-48 mx-4 mt-6' } src="../../images/shingles.png" alt="yellow house"/>
            </button>
            <button onClick={handleClick} type='button' className='roofBtn w-1/3'>
            <label className={choice == "1"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="PartialShade">Ground Mount</label>
            <StaticImage id='1' className={choice == "1"? " " : 'w-64 ml-6 mt-6' } src="../../images/groundMount.png" alt="yellow house"/>
            </button>
            <button onClick={handleClick} type='button' className='roofBtn w-1/3 md:ml-2'>
            <label className={choice == ".7"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="FullSun">Flat Roof</label>
            <StaticImage id='.7' className={choice == ".7"? "" : 'w-40 mx-5 mt-6' } src="../../images/flatRoof.png" alt="yellow house"/>
            </button>
        </div>
    );
};