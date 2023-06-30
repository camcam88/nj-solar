import React from 'react';


export default function AddOn({title, text, postCost, preCost, imageSrc, alt, clickFunction}){
    return(
        <button className="addon flex-col h-96 sm:flex-row sm:h-80" onClick={clickFunction} type='button'>
            <img className='addOnImage' src={imageSrc} alt={alt}/>
            <div className="addOnText-container">
            <h3 className='addOnTitle sm:text-4xl'>{title}</h3>
            <p className='addOntext sm:mt-4 sm:text-left'>{text}</p>
            <p className='postCost sm:text-left'>+ ${postCost}</p>
            <p className='preCost sm:text-left'>Pre-incentive: ${preCost}</p>
            </div>
        </button>
    )
}

