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
        <div className='exposureRow  flex sm:flex-row max-w-5xl'>
            <button onClick={handleClick} type='button' className='exposureBtn w-1/3 mr-2'>
            <label className={choice == "1.3"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="Shaded">Shaded</label>
            <StaticImage id='1.3' className={choice == "1.3"? "StaticImage h-56 choice" : 'StaticImage h-56' } src="../../images/shadeHouse.jpeg" alt="yellow house"/>
            </button>
            <button onClick={handleClick} type='button' className='exposureBtn w-1/3'>
            <label className={choice == "1"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="PartialShade">Partial Shade</label>
            <StaticImage id='1' className={choice == "1"? "StaticImage h-56 choice" : 'StaticImage h-56' } src="../../images/yellowHouse.webp" alt="yellow house"/>
            </button>
            <button onClick={handleClick} type='button' className='exposureBtn w-1/3 ml-2'>
            <label className={choice == ".7"? 'choiceLabel text-lg md:text-2xl' : 'text-lg md:text-2xl' } htmlFor="FullSun">Full Sun</label>
            <StaticImage id='.7' className={choice == ".7"? "StaticImage h-56 choice" : 'StaticImage h-56' } src="../../images/sunnyhouse.jpeg" alt="yellow house"/>
            </button>
        </div>
        // <Swiper
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        // >
        //     <SwiperSlide>
        //         <label htmlFor="Shaded">Shaded</label>
        //         <StaticImage className='StaticImage' src="../../images/shadeHouse.jpeg" alt="yellow house"/>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <label htmlFor="PartialShade">Partial Shade</label>
        //         <StaticImage className='StaticImage' src="../../images/yellowHouse.webp" alt="yellow house"/>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <label htmlFor="FullSun">Full Sun</label>
        //         <StaticImage className='StaticImage' src="../../images/sunnyHouse.jpeg" alt="yellow house"/>
        //     </SwiperSlide>
        // </Swiper>
    );
};