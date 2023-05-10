import React from 'react';
import { Link } from "gatsby"
import MenuBtn from './MenuBtn'

import './menu.css'
import { useState } from 'react';

function Menu(){
    const [hidden, setHidden] = useState(true)


    const handleClick = ()=>{
        console.log('Menu Click', hidden)
        setHidden(!hidden)
    }
    const MBtn = ()=> {
        return(
        <button onClick={ handleClick } type='button' class="menuIcon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
        </button>
        )
    }
    const NavLink = ({name, to})=> <Link to={to} className="Link cursor-pointer">{name}</Link>

    return(
        
        <div>
            <MBtn/>
            <div 
            className={hidden? 'hidden' : 'menuLinks'}>
                            <NavLink to='../about' name='About Us'/> 
                            <NavLink to='../faq' name='Coverage Area'/> 
                            <NavLink to='../faq' name='FAQ'/> 
            </div>
        </div>
        
    )
}

export default Menu;