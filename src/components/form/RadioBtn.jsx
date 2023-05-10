import React from 'react';


function RadioBtn({lable}){

    return(
        <button className='
            w-30
            text-black
            text-lg
            shadow-md
            shadow-slate-400
            hover:shadow-inner
            hover:shadow-slate-400
            rounded-full
            px-10
            py-3
            mx-2
        '>
            {lable}
        </button>
    )
}

export default RadioBtn;