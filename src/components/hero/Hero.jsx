import React, { useState } from 'react';
import GSButton from '../utils/GetStartedButton'
import { StaticImage } from "gatsby-plugin-image"

function HeroPage() {

    
    return ( 
    <div className='
        hero
        flex 
        flex-row
        w-screen 
        mx-auto
        border-b
        border-b-slate-900
        '>
        <div
            className='
            sideCol
            hidden
            lg:flex  
            flex-col 
            w-1/4
            items-center 
            justify-end
            pl-8
            '
        >
        <StaticImage 
            alt='Cartoon Home with solar panels'
            src='../../images/FinishedDesign.png'
            className='
                w-[28vw]
                -mb-1
                ml-6
            '
            />
        </div>
        <div
        className='
            mainCol
            flex 
            flex-col
            px-4
            sm:px-40
            lg:px-0
            lg:w-1/2
            items-center 
            text-center'
        >
            <h1 className='
                text-5xl 
                font-sans
                font-bold
                mt-48
                '>Go Solar!</h1>
            <h2 className='
                text-black 
                text-3xl 
                font-sans
                font-bold'>
                Simple Easy No Depsoite
            </h2>
            <h3 className='
                text-base
                md:text-xl
                font-normal
                mb-24
                mt-8
                px-4
                '>30 year warranty on: parts, labor andpPanel performance.</h3>
            <GSButton />
            <div className='hidden lg:block my-12'>
                {/* <StaticImage 
                alt='Cartoon family near a solar powered lamp'
                src='../../images/groundMount.png'
                className='
                    mainImg
                    mt-48
                    w-[18vw]
                    translate-y-1
                    hidden
                    lg:block
                '
                /> */}
            </div>
            <div className='lg:hidden'>
                <StaticImage 
                alt='Cartoon home with solar panels'
                src='../../images/FinishedDesign.png'
                className='
                    mainImg
                    mt-20
                    w-[38vw]
                    translate-y-1
                    -translate-x-4
                    lg:hidden
                '
                />
            </div>
        </div>
        <div
            className='
            sideCol
            hidden
            lg:flex 
            flex-col 
            w-1/4
            items-center 
            justify-end
            pr-8
            '
        >
        <StaticImage 
            alt='Second house with solar panels'
            src='../../images/SecondHouse.png'
            className='
                w-[28vw]
                -mb-1.5
            '
            />
        </div>

    </div> 
    );
}

export default HeroPage;