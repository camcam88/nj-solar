import React from 'react';

export default function InforCard({number, text, subText}){
    return(
        <div className='flex flex-row lg:w-1/3'>
            <div className='flex shrink-0 text-center justify-center items-center bg-[#5289C9] w-[50px] h-[50px] rounded-full p-0'>
                <p className='text-2xl p-0'>{number}</p>
            </div>
            <div className='px-8 h-32'>
                <p className='text-black text-left text-2xl align-text-bottom'>{text}</p>
                <p className='hidden text-black text-left mt-14 align-text-bottom md:inline'>{subText}</p>
            </div>
        </div>
    )
}