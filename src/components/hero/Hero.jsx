import React, { useState } from 'react';
import GSButton from '../utils/GetStartedButton'
import { StaticImage } from "gatsby-plugin-image"

function HeroPage() {
    const [showForm, setShowForm ] = useState(false)

    function handleClick() {
        console.log("clicked")
        setShowForm(!showForm)
    }
    
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
            alt='Cartoon Home with blue solar panels'
            src='../../images/FinishedDesign.png'
            className='
                w-[28vw]
                -mb-2
            '
            />
        </div>
        <div
        className='
            mainCol
            flex 
            flex-col
            md:px-40
            lg:px-0
            lg:w-1/2
            items-center 
            text-center'
        >
            <h1 className='
                text-5xl 
                font-sans
                font-bold
                mt-8
                '>Go Solar With One Low Hassle-Free Quote</h1>
            <h3 className='
                text-3xl
                font-normal
                mb-14
                '>Best Equipment. 30 Year Warranty on Parts, Labor and Panel Performance.</h3>
            <GSButton />
            <StaticImage 
            alt='Cartoon family near a solar powered lamp'
            src='../../images/FamilyPicture.png'
            className='
                mainImg
                mt-48
                w-[18vw]
                translate-y-1
                hidden
                lg:block
            '
            />
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
                -mb-1
            '
            />
        </div>

    </div> 
    );
}

export default HeroPage;