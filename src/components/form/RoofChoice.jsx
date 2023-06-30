import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useState } from 'react';

export default ()=> {

    const [choice, setChoice] = useState('')

    const handleClick =(e)=>{
        const target = e.target.id;
        const parent = e.target.parentElement.id;

        if(target === 'shingles' || parent === 'shingles') setChoice('shingles');   
        if(target === 'ground' || parent === 'ground') setChoice('ground');
        if(target === 'flat' || parent === 'flat') setChoice('flat');
        console.log(target)
    }

    return (
        <div className='exposureRow  flex md:flex-row flex-col max-w-5xl mb-8'>
            <button onClick={handleClick} id='shingles' type='button' className={choice == 'shingles'? 'bg-[#c9ddf3] roofBtn w-1/3 mr-2': 'roofBtn w-1/3 mr-2'}>
            <label className={choice == "shingles"? 'font-bold text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="shingles">Shingles</label>
            <StaticImage id='shingles' className={choice == "shingles"? "w-48 mx-4 mt-6 -translate-y-6" : 'w-48 mx-4 mt-6 translate-y-1' } src="../../images/shingles.png" alt="Drawing ofa house with an angled roof with shingles"/>
            </button>
            <button onClick={handleClick} id='ground' type='button' className={choice == 'ground'? 'bg-[#c9ddf3] roofBtn w-1/3 mr-2': 'roofBtn w-1/3 mr-2'}>
            <label className={choice == "ground"? 'font-bold text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="ground">Ground Mount</label>
            <StaticImage id='ground' className={choice == "ground"? "w-64 ml-6 mt-6 -translate-y-12" : 'w-64 ml-6 mt-6 -translate-y-6' } src="../../images/groundMount.png" alt="Drawing of a ground mounted solar panel"/>
            </button>
            <button onClick={handleClick} id='flat' type='button' className={choice == 'flat'? 'bg-[#c9ddf3] roofBtn w-1/3 mr-2': 'roofBtn w-1/3 mr-2'}>
            <label className={choice == "flat"? 'font-bold text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="flat">Flat Roof</label>
            <StaticImage id='flat' className={choice == "flat"? "w-40 mx-5 mt-6 -translate-y-2" : 'w-40 mx-5 mt-6 translate-y-2' } src="../../images/flatRoof.png" alt="Drawing of a building with a flat roof"/>
            </button>
        </div>
    );
};