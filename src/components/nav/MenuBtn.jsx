import React from 'react';

import './menu.css'

export default ({click})=> {
    return(
        <button onClick={click} type='button' class="menuIcon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
        </button>
    )
}