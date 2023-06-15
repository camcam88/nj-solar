import React, {useState, useEffect} from 'react';

import {useForm, useFormUpdate} from '../../Context/systemContext'
import { usePriceUpdate, useReturnPPW} from '../../Context/ppwContext'
// import pannelImag from '../../images/qcell365.png'
function RadioBtn({lable, pannelImag}){
    const [ppwState, setPpwState] = useState();
    const sytem = useForm()
    const changeSystem = useFormUpdate()
    const setSystem = usePriceUpdate()
    const PPW = useReturnPPW();


    useEffect(() => {
        setPpwState(PPW(lable));
    });

    const handlePanelClick =(e)=>{
        console.log('Clicked', lable)
        changeSystem(lable)
        setSystem(lable)
    }

    return(
        <button id={lable} type='button'
        onClick={handlePanelClick}
        className={sytem == lable? `text-center
        text-lg
        shadow-inner
        shadow-blue-500/50
        rounded-md
        px-1
        py-3
        mx-2
        w-1/2
        h-86
        sm:h-96
        flex
        flex-col
        justify-center
        items-center
        bg-[#5289C9]
        hover:bg-[#75a6e797]
        font-bold
        text-white
        ` 
        :
        `text-center
        text-black
        text-lg
        shadow-md
        shadow-slate-400
        hover:shadow-inner
        hover:shadow-slate-400
        rounded-md
        px-1
        py-3
        mx-2
        w-1/2
        h-86
        sm:h-96
        flex
        flex-col
        justify-center
        items-center
        bg-[#f5f5f7]
        hover:bg-[#567fb496]`}>
            <img  src={pannelImag} 
            alt="pannelImag"
            className='h-44 sm:h-60
            '
            />
            <hr/>
            {lable} 
            <span className={sytem == lable? `text-emerald-300 mb-2` 
        :
        `font-semibold text-emerald-600 mb-2`}>
                PPW: ${ppwState}
            </span>
        </button>
    )
}

export default RadioBtn;