import React from 'react';

function RadioRow({children}){

    return(
        <div className='
            flex
            flex-row
            mb-8
        '>
            {children}
        </div>
    )
}

export default RadioRow;